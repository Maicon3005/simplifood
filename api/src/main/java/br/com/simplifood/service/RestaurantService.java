package br.com.simplifood.service;

import br.com.simplifood.mapper.AddressMapper;
import br.com.simplifood.mapper.RestaurantMapper;
import br.com.simplifood.model.AddressModel;
import br.com.simplifood.model.RestaurantModel;
import br.com.simplifood.model.UserModel;
import br.com.simplifood.repository.AddressRepository;
import br.com.simplifood.repository.RestaurantRepository;
import br.com.simplifood.representation.restaurant.CreateRestaurantRequest;
import br.com.simplifood.representation.restaurant.CreateRestaurantResponse;
import br.com.simplifood.representation.restaurant.RestaurantNameResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserService userService;

    public CreateRestaurantResponse saveRestaurant(CreateRestaurantRequest createRestaurantRequest){
        RestaurantMapper restaurantToModelMapper = new RestaurantMapper(createRestaurantRequest);
        RestaurantModel restaurantModel = restaurantToModelMapper.toModel();

        AddressMapper addressMapper = new AddressMapper(createRestaurantRequest);
        AddressModel addressModel = addressMapper.toModel();

        UserModel userModel = userService.getUser(createRestaurantRequest.getUserId());

        restaurantModel.setAddressModel(addressModel);
        restaurantModel.setUserModel(userModel);

        CreateRestaurantResponse createRestaurantResponse = new CreateRestaurantResponse(restaurantRepository.save(restaurantModel).getId());
        return createRestaurantResponse;
    }

    public RestaurantNameResponse getNameRestaurant(){
        RestaurantModel restaurantModel = restaurantRepository.getById(1);
        return new RestaurantNameResponse(restaurantModel.getFantasyName());
    }

}
