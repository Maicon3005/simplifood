package br.com.simplifood.controller;

import br.com.simplifood.repository.UserRepository;
import br.com.simplifood.representation.user.CreateUserRequest;
import br.com.simplifood.representation.user.CreateUserResponse;
import br.com.simplifood.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final UserService userService;

    public UserController(UserRepository userRepository, PasswordEncoder encoder, UserService userService) {
        this.userRepository = userRepository;
        this.encoder = encoder;
        this.userService = userService;
    }

    @PostMapping("/save")
    public ResponseEntity<CreateUserResponse> saveUser(@RequestBody CreateUserRequest createUserRequest){
        return ResponseEntity.ok(userService.saveUser(createUserRequest));
    }

    @GetMapping("/validatePassword")
    public ResponseEntity<Boolean> validatePassword(@RequestParam String email,
                                                @RequestParam String password){
        boolean valid = userService.validatePassword(email,password);
        if(valid){
            return ResponseEntity.ok(valid);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(valid);
    }

}
