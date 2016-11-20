package com.midalort.nicerun.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
    @GetMapping("/hello")
    public String hello(){
        return "hellot.html";
    }
    @GetMapping("/")
    public String login(){
        return "login.html";
    }
}
