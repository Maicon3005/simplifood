package br.com.simplifood.service;

import br.com.simplifood.mapper.AddressToModelMapper;
import br.com.simplifood.mapper.RestaurantToModelMapper;
import br.com.simplifood.model.AddressModel;
import br.com.simplifood.model.RestaurantModel;
import br.com.simplifood.model.UserModel;
import br.com.simplifood.repository.AddressRepository;
import br.com.simplifood.repository.RestaurantRepository;
import br.com.simplifood.representation.CreateRestaurantRequest;
import br.com.simplifood.representation.CreateRestaurantResponse;
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
        RestaurantToModelMapper restaurantToModelMapper = new RestaurantToModelMapper(createRestaurantRequest);
        RestaurantModel restaurantModel = restaurantToModelMapper.toModel();

        AddressToModelMapper addressToModelMapper = new AddressToModelMapper(createRestaurantRequest);
        AddressModel addressModel = addressToModelMapper.toModel();

        UserModel userModel = userService.getUser(createRestaurantRequest.getUserId());

        restaurantModel.setAddressModel(addressModel);
        restaurantModel.setUserModel(userModel);

        CreateRestaurantResponse createRestaurantResponse = new CreateRestaurantResponse(restaurantRepository.save(restaurantModel).getId());
        return createRestaurantResponse;
    }

}
