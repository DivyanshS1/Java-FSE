package com.div.aspect;

import org.aspectj.lang.ProceedingJoinPoint;

public class LoggingAspect {

    public void beforeMethod() {
        System.out.println("===== Logging Before Method Execution =====");
    }

    public void afterMethod() {
        System.out.println("===== Logging After Method Execution =====");
    }
}