package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplicationTests {

	private static final Logger LOGGER =
			LoggerFactory.getLogger(SpringLearnApplicationTests.class);

	public static void main(String[] args) {

		LOGGER.info("Application Started");

		SpringApplication.run(SpringLearnApplicationTests.class, args);

		LOGGER.info("Application Running");
	}

}