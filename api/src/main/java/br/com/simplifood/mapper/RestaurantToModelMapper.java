package br.com.simplifood.mapper;

import br.com.simplifood.model.RestaurantModel;
import br.com.simplifood.representation.CreateUserRequest;

public class RestaurantToModelMapper {

    private RestaurantModel restaurantModel;

    public RestaurantToModelMapper(CreateUserRequest createUserRequest) {
        this.restaurantModel = new RestaurantModel();
        this.restaurantModel.setCorporateName(createUserRequest.getCorporateName());
        this.restaurantModel.setFantasyName(createUserRequest.getFantasyName());
        this.restaurantModel.setCnpj(createUserRequest.getCnpj());
    }

    public RestaurantModel toModel(){
        return restaurantModel;
    }
}
