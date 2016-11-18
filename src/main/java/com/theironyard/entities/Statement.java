package com.theironyard.entities;

import org.hibernate.annotations.Formula;

import javax.persistence.*;

/**
 * Created by Troy on 11/17/16.
 */
@Entity
@Table(name = "statements")
public class Statement {
    @Id
    @GeneratedValue
    int id;

    @Column
    double income;

    @Column
    double rent;

    @Column
    double utilities;

    @Column
    double other;

    @Column
    double moneyAfterPayments;

    @Column
    double savingsAccount;

    @Column
    double moneyMarketFund;

    @Column
    double mutualFund;

    @Column
    double saved;

    @ManyToOne
    User user;

    public Statement() {
    }

    public Statement(double income, double rent, double utilities, double other, double moneyAfterPayments, double savingsAccount, double moneyMarketFund, double mutualFund, double saved, User user) {
        this.income = income;
        this.rent = rent;
        this.utilities = utilities;
        this.other = other;
        this.moneyAfterPayments = moneyAfterPayments;
        this.savingsAccount = savingsAccount;
        this.moneyMarketFund = moneyMarketFund;
        this.mutualFund = mutualFund;
        this.saved = saved;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getIncome() {
        return income;
    }

    public void setIncome(double income) {
        this.income = income;
    }

    public double getRent() {
        return rent;
    }

    public void setRent(double rent) {
        this.rent = rent;
    }

    public double getUtilities() {
        return utilities;
    }

    public void setUtilities(double utilities) {
        this.utilities = utilities;
    }

    public double getOther() {
        return other;
    }

    public void setOther(double other) {
        this.other = other;
    }

    public double getMoneyAfterPayments() {
        return moneyAfterPayments;
    }

    public void setMoneyAfterPayments(double moneyAfterPayments) {
        this.moneyAfterPayments = moneyAfterPayments;
    }

    public double getSavingsAccount() {
        return savingsAccount;
    }

    public void setSavingsAccount(double savingsAccount) {
        this.savingsAccount = savingsAccount;
    }

    public double getMoneyMarketFund() {
        return moneyMarketFund;
    }

    public void setMoneyMarketFund(double moneyMarketFund) {
        this.moneyMarketFund = moneyMarketFund;
    }

    public double getMutualFund() {
        return mutualFund;
    }

    public void setMutualFund(double mutualFund) {
        this.mutualFund = mutualFund;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public double getSaved() {
        return saved;
    }

    public void setSaved(double saved) {
        this.saved = saved;
    }
}
