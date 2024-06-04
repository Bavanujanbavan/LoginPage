package com.example.attendancesystem.model;

public class User {
    private String UserName;

    public User(String userName, String password) {
        UserName = userName;
        Password = password;
    }

    private String Password;
    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }


}
