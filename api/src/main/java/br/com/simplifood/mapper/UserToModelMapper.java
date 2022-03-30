package br.com.simplifood.mapper;

import br.com.simplifood.model.UserModel;
import br.com.simplifood.representation.user.CreateUserRequest;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserToModelMapper {

    private UserModel userModel;
    private final PasswordEncoder encoder;

    public UserToModelMapper(CreateUserRequest createUserRequest, PasswordEncoder encoder) {
        this.encoder = encoder;
        this.userModel = new UserModel();
        this.userModel.setName(createUserRequest.getName());
        this.userModel.setLastName(createUserRequest.getLastName());
        this.userModel.setEmail(createUserRequest.getEmail());
        this.userModel.setPassword(this.encoder.encode(createUserRequest.getPassword()));
    }

    public UserModel toModel(){
        return this.userModel;
    }
}
