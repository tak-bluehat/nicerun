package com.midalort.nicerun.domain;

public class AuthBean {
    // mail address
    private String mailAddress;
    // password
    private String password;
    
    public void setMailAddress(String mailAddress) {
        this.mailAddress = mailAddress;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }

    public String getMailAddress() {
        return this.mailAddress;
    }
    
    public String getPassword() {
        return this.password;
    }
}
