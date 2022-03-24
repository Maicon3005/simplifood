package br.com.simplifood.service;

import br.com.simplifood.mapper.RestaurantToModelMapper;
import br.com.simplifood.model.RestaurantModel;
import br.com.simplifood.model.UserModel;
import br.com.simplifood.repository.RestaurantRepository;
import br.com.simplifood.repository.UserRepository;
import br.com.simplifood.representation.RestaurantWIthAddressRequest;
import org.springframework.stereotype.Service;

@Service
public class RestaurantWithAddressService {

    private final RestaurantRepository restaurantRepository;
    private final UserRepository userRepository;

    public RestaurantWithAddressService(RestaurantRepository restaurantRepository, UserRepository userRepository) {
        this.restaurantRepository = restaurantRepository;
        this.userRepository = userRepository;
    }

    public RestaurantModel saveRestaurantWithAddress(RestaurantWIthAddressRequest restaurantWIthAddressRequest) {
        UserModel userModel = userRepository.getById(restaurantWIthAddressRequest.getUserId());
        RestaurantToModelMapper restaurantToModelMapper = new RestaurantToModelMapper(restaurantWIthAddressRequest, userModel);
        RestaurantModel restaurantModel = restaurantToModelMapper.toModel();


        return restaurantRepository.save(restaurantModel);
    }
}
