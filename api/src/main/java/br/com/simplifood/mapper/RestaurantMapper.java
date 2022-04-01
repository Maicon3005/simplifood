package br.com.simplifood.mapper;

import br.com.simplifood.model.RestaurantModel;
import br.com.simplifood.representation.restaurant.CreateRestaurantRequest;

public class RestaurantMapper {

    private RestaurantModel restaurantModel;

    public RestaurantMapper(CreateRestaurantRequest createRestaurantRequest) {
        this.restaurantModel = new RestaurantModel();
        this.restaurantModel.setCorporateName(createRestaurantRequest.getCorporateName());
        this.restaurantModel.setFantasyName(createRestaurantRequest.getFantasyName());
        this.restaurantModel.setCnpj(createRestaurantRequest.getCnpj());
    }

    public RestaurantModel toModel(){
        return restaurantModel;
    }
}
