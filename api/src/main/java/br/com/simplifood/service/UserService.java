package br.com.simplifood.service;

import br.com.simplifood.mapper.UserMapper;
import br.com.simplifood.model.UserModel;
import br.com.simplifood.repository.UserRepository;
import br.com.simplifood.representation.user.CreateUserRequest;
import br.com.simplifood.representation.user.CreateUserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private UserRepository userRepository;

    public CreateUserResponse saveUser(CreateUserRequest createUserRequest){
        UserMapper userMapper = new UserMapper(createUserRequest, encoder);
        UserModel userModel = userMapper.toModel();

        CreateUserResponse createUserResponse =  new CreateUserResponse(userRepository.save(userModel).getId());
        return createUserResponse;
    }

    public UserModel getUser(Integer idUser){
        Optional<UserModel> optionalUserModel = userRepository.findById(idUser);
        if (optionalUserModel.isEmpty()){
            return new UserModel();
        }
        return optionalUserModel.get();
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
