package br.com.simplifood.mapper;

import br.com.simplifood.model.RestaurantModel;
import br.com.simplifood.model.UserModel;
import br.com.simplifood.representation.RestaurantWIthAddressRequest;

public class RestaurantToModelMapper {

    private RestaurantModel restaurantModel;

    public RestaurantToModelMapper(RestaurantWIthAddressRequest restaurantWIthAddressRequest, UserModel userModel){
        restaurantModel = new RestaurantModel();
        this.restaurantModel.setCorporateName(restaurantWIthAddressRequest.getCorporateName());
        this.restaurantModel.setFantasyName(restaurantWIthAddressRequest.getFantasyName());
        this.restaurantModel.setCnpj(restaurantWIthAddressRequest.getCnpj());
        this.restaurantModel.setUserModel(userModel);
    }

    public RestaurantModel toModel(){
        return this.restaurantModel;
    }
}
