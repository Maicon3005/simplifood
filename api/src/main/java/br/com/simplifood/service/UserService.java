package br.com.simplifood.service;

import br.com.simplifood.model.UserModel;
import br.com.simplifood.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final PasswordEncoder encoder;
    private final UserRepository userRepository;


    public UserService(PasswordEncoder encoder, UserRepository userRepository) {
        this.encoder = encoder;
        this.userRepository = userRepository;
    }

    public UserModel saveUser(UserModel user){
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public boolean validatePassword(String email, String password){
        Optional<UserModel> optUser = userRepository.findByEmail(email);
        if(optUser.isEmpty()){
            return false;
        }
        UserModel userModel = optUser.get();
        return encoder.matches(password, userModel.getPassword());
    }
}
