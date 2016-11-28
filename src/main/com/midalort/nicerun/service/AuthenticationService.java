package com.midalort.nicerun.service;

import org.springframework.stereotype.Service;

import com.midalort.nicerun.domain.AuthResult;

@Service
public class AuthenticationService {
    
    public AuthResult auth(String mailAddress, String password) {
        AuthResult authResult = new AuthResult();
        if(mailAddress.equals("tak.bluehat@gmail.com") && password.equals("tak.bluehat") ) {
            authResult.setResult(true);
            authResult.setStatusCode(200); 
        } else {
            authResult.setResult(false);
            authResult.setStatusCode(403); 
        }
        return authResult;
    } 
}
