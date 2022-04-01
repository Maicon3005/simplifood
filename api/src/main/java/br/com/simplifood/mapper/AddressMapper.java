package br.com.simplifood.mapper;

import br.com.simplifood.model.AddressModel;
import br.com.simplifood.representation.restaurant.CreateRestaurantRequest;

public class AddressMapper {

    private AddressModel addressModel;

        public AddressMapper(CreateRestaurantRequest createRestaurantRequest){
        this.addressModel = new AddressModel();
        this.addressModel.setCep(createRestaurantRequest.getCep());
        this.addressModel.setCity(createRestaurantRequest.getCity());
        this.addressModel.setState(createRestaurantRequest.getState());
        this.addressModel.setDistrict(createRestaurantRequest.getDistrict());
        this.addressModel.setStreet(createRestaurantRequest.getStreet());
        this.addressModel.setNumber(createRestaurantRequest.getNumber());
    }

    public AddressModel toModel(){
        return addressModel;
    }
}
