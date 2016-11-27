package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by Troy on 11/16/16.
 */
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false,unique = true)
    String username;

    @Column(nullable = false)
    String password;

    @Column
    double goal;

    @Column
    boolean isAdmin;

    public User() {
    }

    public User(String username, String password, double goal, boolean isAdmin) {
        this.username = username;
        this.password = password;
        this.goal = goal;
        this.isAdmin = isAdmin;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public double getGoal() {
        return goal;
    }

    public void setGoal(double goal) {
        this.goal = goal;
    }
}
