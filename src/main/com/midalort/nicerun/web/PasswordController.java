package com.midalort.nicerun.web;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;

import com.midalort.nicerun.domain.AuthResult;
import com.midalort.nicerun.domain.AuthBean;
import com.midalort.nicerun.service.AuthenticationService;

@RestController
public class PasswordController {

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/apis/password/authentication")
    public AuthResult authentication(@RequestBody AuthBean authBean) {
        return authenticationService.auth(
                   authBean.getMailAddress(), authBean.getPassword()
        );
    }
}
