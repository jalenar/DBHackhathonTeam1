package com.db.wise.test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;


import org.springframework.context.annotation.ComponentScan;





/*
 * This is the main Spring Boot application class. It configures Spring Boot, JPA, Swagger
 */

@SpringBootApplication
 // Sprint Boot Auto Configuration
@ComponentScan(basePackages = "com.db.wise.test")
//@EnableJpaRepositories("com.db.wise.test.dao.jpa") // To segregate MongoDB and JPA repositories. Otherwise not needed.
public class Application  {

    private static final Class<Application> applicationClass = Application.class;
    private static final Logger log = LoggerFactory.getLogger(applicationClass);

	public static void main(String[] args) {
		SpringApplication.run(applicationClass, args);
	}

  

}
