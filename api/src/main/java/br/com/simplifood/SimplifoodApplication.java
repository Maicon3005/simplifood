package br.com.simplifood;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableFeignClients
@SpringBootApplication()
public class SimplifoodApplication {

	public static void main(String[] args) {
		SpringApplication.run(SimplifoodApplication.class, args);
	}

	@Bean
	public PasswordEncoder getPasswordEnconder(){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}

}
