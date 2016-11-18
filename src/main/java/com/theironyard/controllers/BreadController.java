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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.persistence.Column;
import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.http.HttpSession;
import javax.xml.transform.sax.SAXTransformerFactory;
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
    public void init() throws SQLException {
        h2 = Server.createWebServer().start();
        if (statements.count() == 0) {
            User user = new User("Troy","pass123",1000);
            users.save(user);
            statements.save(new Statement(2000,750,150,600,500,100,100,100,300,user));
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
    }


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

    @RequestMapping(path = "/signup", method = RequestMethod.POST)
    public ResponseEntity<User> signUpPost(HttpSession session, @RequestBody User user) throws PasswordStorage.CannotPerformOperationException {
        if (user.getUsername() == null || user.getPassword() == null ) {
            return new ResponseEntity<User>(HttpStatus.NOT_ACCEPTABLE);
        }
        User userDb = new User (user.getUsername(),PasswordStorage.createHash(user.getPassword()),user.getGoal());
        users.save(userDb);
        session.setAttribute("username", userDb.getUsername());
        return new ResponseEntity<User>(userDb, HttpStatus.OK);
    }

    @RequestMapping(path = "/signup", method = RequestMethod.GET)
    public User signUpGet(HttpSession session) {
        String name = (String) session.getAttribute("username");
        return users.findFirstByUsername(name);
    }

    @RequestMapping(path = "/payments", method = RequestMethod.POST)
    public ResponseEntity<Statement> postPayments(HttpSession session, @RequestBody Statement statement, Double moneyAfterPayments) {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<Statement>(HttpStatus.FORBIDDEN);
        }
        statement.setUser(users.findFirstByUsername(username));
        moneyAfterPayments = statement.getIncome() - (statement.getRent() + statement.getUtilities() + statement.getOther());
        statement.setMoneyAfterPayments(moneyAfterPayments);
        return new ResponseEntity<Statement>(statements.save(statement),HttpStatus.OK);
    }

    @RequestMapping(path = "/statements", method = RequestMethod.GET)
    public Iterable<Statement> getPayments(HttpSession session) throws Exception {
        return statements.findAll();
    }

    @RequestMapping(path = "/savings", method = RequestMethod.PUT)
    public ResponseEntity<Statement> postSavings(HttpSession session, @RequestBody Statement statement, Double saved) {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<Statement>(HttpStatus.FORBIDDEN);
        }
        statement.setUser(users.findFirstByUsername(username));
        User user = users.findFirstByUsername(username);
        Statement statementFromDb = statements.findByUserId(user.getId());
        saved = statement.getMutualFund() + statement.getMoneyMarketFund() + statement.getSavingsAccount();
        statement.setIncome(statementFromDb.getIncome());
        statement.setRent(statementFromDb.getRent());
        statement.setUtilities(statementFromDb.getUtilities());
        statement.setOther(statementFromDb.getOther());
        statement.setMoneyAfterPayments(statementFromDb.getMoneyAfterPayments());
        statement.setSaved(saved);
        return new ResponseEntity<Statement>(statements.save(statement), HttpStatus.OK);
    }
}
