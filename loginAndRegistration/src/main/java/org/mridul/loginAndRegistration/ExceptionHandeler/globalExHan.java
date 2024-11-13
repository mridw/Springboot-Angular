package org.mridul.loginAndRegistration.ExceptionHandeler;

import org.mridul.loginAndRegistration.Response.loginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class globalExHan {
    @ExceptionHandler()
    public ResponseEntity<loginResponse> userAlreadyExistsException(){

    }
}
