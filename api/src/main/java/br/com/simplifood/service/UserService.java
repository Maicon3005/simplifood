package br.com.simplifood.service;

import br.com.simplifood.mapper.AddressToModelMapper;
import br.com.simplifood.mapper.RestaurantToModelMapper;
import br.com.simplifood.mapper.UserToModelMapper;
import br.com.simplifood.model.AddressModel;
import br.com.simplifood.model.RestaurantModel;
import br.com.simplifood.model.UserModel;
import br.com.simplifood.repository.UserRepository;
import br.com.simplifood.representation.CreateUserRequest;
import br.com.simplifood.representation.CreateUserResponse;
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
        UserToModelMapper userToModelMapper = new UserToModelMapper(createUserRequest, encoder);
        RestaurantToModelMapper restaurantToModelMapper = new RestaurantToModelMapper(createUserRequest);
        AddressToModelMapper addressToModelMapper = new AddressToModelMapper(createUserRequest);

        RestaurantModel restaurantModel = restaurantToModelMapper.toModel();
        AddressModel addressModel = addressToModelMapper.toModel();
        UserModel userModel = userToModelMapper.toModel();

        userModel.setRestaurantModel(restaurantModel);
        userModel.setAddressModel(addressModel);

        CreateUserResponse createUserResponse =  new CreateUserResponse(userRepository.save(userModel).getId());
        return createUserResponse;
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
