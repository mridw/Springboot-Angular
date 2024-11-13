package org.mridul.loginAndRegistration.Controller;

import org.mridul.loginAndRegistration.DTO.loginDto;
import org.mridul.loginAndRegistration.DTO.userCredDto;
import org.mridul.loginAndRegistration.Entity.userCredEntity;
import org.mridul.loginAndRegistration.Response.loginResponse;
import org.mridul.loginAndRegistration.Service.loginRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
@CrossOrigin("http://localhost:4200")
public class loginRegisterController {
    @Autowired
    loginRegisterService service;

    @PostMapping("add")
    public userCredEntity addUser(@RequestBody userCredDto userData){
        return service.addUsers(userData);
    }
    @PostMapping("login")
    public Boolean loginUser(@RequestBody loginDto loginCreds){
        return service.loginUser(loginCreds);
    }
//    public ResponseEntity<?> loginUser(@RequestBody loginDto loginCreds){
//        loginResponse response = service.loginUser(loginCreds);
//        return ResponseEntity.ok(response);
//    }

}
