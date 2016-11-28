package com.theironyard.controllers;

import com.theironyard.entities.Statement;
import com.theironyard.entities.User;
import com.theironyard.services.StatementRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.annotation.PreDestroy;
import javax.persistence.Column;
import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.http.HttpSession;
import javax.xml.transform.sax.SAXTransformerFactory;
import java.io.IOException;
import java.sql.SQLException;


/**
 * Created by Troy on 11/16/16.
 */
@RestController
public class BreadController {
    @Autowired
    UserRepository users;

    @Autowired
    StatementRepository statements;

    Server h2;

    @PostConstruct
    public void init() throws SQLException, PasswordStorage.CannotPerformOperationException {
        h2 = Server.createWebServer().start();
        if (statements.count() == 0) {
            User user = new User("Troy",PasswordStorage.createHash("pass123"),1000,true);
            User user1 = new User("Jordan",PasswordStorage.createHash("pass123"),1000,true);
            User user2 = new User("Justin",PasswordStorage.createHash("pass123"),1000,true);
            User user3 = new User("Alice",PasswordStorage.createHash("pass123"),1000,false);
            users.save(user);
            users.save(user1);
            users.save(user2);
            users.save(user3);
            statements.save(new Statement(2000,750,150,600,500,100,100,100,300,user));
            statements.save(new Statement(2000,750,150,600,500,100,100,100,300,user1));
            statements.save(new Statement(2000,750,150,600,500,100,100,100,300,user2));
            statements.save(new Statement(1000,600,200,100,100,30,30,30,90,user3));
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
    }


    //login with password verification simple auth
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<User> postUser(HttpSession session, @RequestBody User user) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {
        User userFromDb = users.findFirstByUsername(user.getUsername());
        if (userFromDb == null) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        session.setAttribute("username", user.getUsername());
        return new ResponseEntity<>(userFromDb, HttpStatus.OK);
    }

    @RequestMapping(path = "/login", method = RequestMethod.GET)
    public User getUser(HttpSession session) {
        String name = (String) session.getAttribute("username");
        return users.findFirstByUsername(name);
    }

    //If you don't exist signup
    @RequestMapping(path = "/signup", method = RequestMethod.POST)
    public ResponseEntity<User> signUpPost(HttpSession session, @RequestBody User user) throws PasswordStorage.CannotPerformOperationException {
        if (user.getUsername() == null || user.getPassword() == null ) {
            return new ResponseEntity<User>(HttpStatus.NOT_ACCEPTABLE);
        }
        User userFromDb = new User (user.getUsername(),PasswordStorage.createHash(user.getPassword()),user.getGoal(),user.isAdmin());
        users.save(userFromDb);
        session.setAttribute("username", userFromDb.getUsername());
        return new ResponseEntity<User>(userFromDb, HttpStatus.OK);
    }

    @RequestMapping(path = "/signup", method = RequestMethod.GET)
    public User signUpGet(HttpSession session) {
        String name = (String) session.getAttribute("username");
        return users.findFirstByUsername(name);
    }


    //Logs out current user
    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public ResponseEntity<User> logoutUser(HttpSession session) {
        session.invalidate();
        return new ResponseEntity<User>(HttpStatus.OK);
    }

    //In this route you fill in income, rent, utilites, etc. and then it calculates money after payments
    @RequestMapping(path = "/payments", method = RequestMethod.POST)
    public ResponseEntity<Statement> postPayments(HttpSession session, @RequestBody Statement statement,HttpServletResponse response) throws IOException {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<Statement>(HttpStatus.FORBIDDEN);
        }
        statement.setUser(users.findFirstByUsername(username));
        statement.setMoneyAfterPayments(statement.getIncome() - (statement.getRent() + statement.getUtilities() + statement.getOther()));
        return new ResponseEntity<Statement>(statements.save(statement),HttpStatus.OK);
    }


    //If the logged in user is an admin then can look at all statements
    @RequestMapping(path = "/admin-statements", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Statement>> getAllStatements(HttpSession session) {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<Iterable<Statement>>(HttpStatus.FORBIDDEN);
        }
        if (users.findFirstByUsername(username).isAdmin()) {
            return new ResponseEntity<Iterable<Statement>>(statements.findAll(),HttpStatus.OK);
        }
        return null;
    }

    //Only shows statements from logged in user
    @RequestMapping(path = "/statements", method = RequestMethod.GET)
    public ResponseEntity<Statement> getStatements(HttpSession session) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<Statement>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<Statement>(statements.findByUserId(users.findFirstByUsername(username).getId()),HttpStatus.OK);
    }


    //A route which takes the statement that was previously filled up in /payments and populates the rest of it
    @RequestMapping(path = "/savings", method = RequestMethod.PUT)
    public ResponseEntity<Statement> postSavings(HttpSession session, @RequestBody Statement statement, Double saved, HttpServletResponse response) throws IOException {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<Statement>(HttpStatus.FORBIDDEN);
        }
        statement.setUser(users.findFirstByUsername(username));
        User user = users.findFirstByUsername(username);
        Statement statementFromDb = statements.findByUserId(user.getId());
        saved = (statement.getMutualFund() + statement.getMutualFund()*0.7) + ((statement.getMoneyMarketFund() + statement.getMoneyMarketFund()*0.5) + (statement.getSavingsAccount() + statement.getSavingsAccount()*0.1));
        statement.setId(statementFromDb.getId());
        statement.setIncome(statementFromDb.getIncome());
        statement.setRent(statementFromDb.getRent());
        statement.setUtilities(statementFromDb.getUtilities());
        statement.setOther(statementFromDb.getOther());
        statement.setMoneyAfterPayments(statementFromDb.getMoneyAfterPayments());
        statement.setSaved(saved + statementFromDb.getSaved());
        if (statementFromDb.getMoneyAfterPayments() < saved) { //statementFromDb.getMoneyMarketFund() < statement.getMutualFund() || statementFromDb.getMoneyAfterPayments() < statement.getSavingsAccount() || statementFromDb.getMoneyAfterPayments() < statement.getMoneyMarketFund() || statementFromDb.getMoneyAfterPayments() < statement.getSavingsAccount() + statement.getMutualFund() || statementFromDb.getMoneyAfterPayments() < statement.getSavingsAccount() + statement.getMoneyMarketFund() || statementFromDb.getMoneyAfterPayments() < statement.getMoneyMarketFund() + statement.getMutualFund() || statementFromDb.getMoneyAfterPayments() < statement.getMutualFund() + statement.getMoneyMarketFund() + statement.getSavingsAccount()) {
            return new ResponseEntity<Statement>(HttpStatus.FORBIDDEN);
        }
        else {
            return new ResponseEntity<Statement>(statements.save(statement), HttpStatus.OK);
        }
    }

    //After /savings you will be redirected here to enter new quantities for income, rent, etc...
    @RequestMapping(path = "/next-payments", method = RequestMethod.PUT)
    public ResponseEntity<Statement> putPayments(HttpSession session, @RequestBody Statement statement, Double moneyAfterPayments, HttpServletResponse response) throws IOException {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<Statement>(HttpStatus.FORBIDDEN);
        }
        statement.setUser(users.findFirstByUsername(username));
        User user = users.findFirstByUsername(username);
        Statement statementFromDb = statements.findByUserId(user.getId());
        statement.setId(statementFromDb.getId());
        moneyAfterPayments = statement.getIncome() - (statement.getRent() + statement.getUtilities() + statement.getOther());
        statement.setMoneyAfterPayments(moneyAfterPayments);
        statement.setSavingsAccount(statementFromDb.getSavingsAccount());
        statement.setMoneyMarketFund(statementFromDb.getMoneyMarketFund());
        statement.setMutualFund(statementFromDb.getMutualFund());
        statement.setSaved(statementFromDb.getSaved());
        return new ResponseEntity<Statement>(statements.save(statement),HttpStatus.OK);
    }

    //If a user wants to create new statements this route will delete their current statement...issues!!!
    @RequestMapping(path = "/delete-statement", method = RequestMethod.POST)
    public void deleteStatements(HttpSession session, @RequestBody Statement statement, HttpServletResponse response) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Forbidden");
        }
        statement.setUser(users.findFirstByUsername(username));
        statements.delete(statement);
    }
}
