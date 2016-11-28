package com.midalort.nicerun.domain;

public class AuthResult {
    // result
    private boolean result;
    // status code
    private int statusCode;

    public void setResult(boolean result) {
        this.result = result;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public boolean getResult() {
        return this.result;
    }
    
    public int getStatusCode() {
        return this.statusCode;
    }
}
