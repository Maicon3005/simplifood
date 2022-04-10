package br.com.simplifood.mapper;

import br.com.simplifood.model.AddressModel;
import br.com.simplifood.representation.address.AddressResponse;
import br.com.simplifood.representation.order.AddAddressToOrderRequest;
import br.com.simplifood.representation.restaurant.CreateRestaurantRequest;

public class AddressMapper {

    private AddressModel addressModel;
    private AddressResponse addressResponse;

        public AddressMapper(CreateRestaurantRequest createRestaurantRequest){
        this.addressModel = new AddressModel();
        this.addressModel.setCep(createRestaurantRequest.getCep());
        this.addressModel.setCity(createRestaurantRequest.getCity());
        this.addressModel.setState(createRestaurantRequest.getState());
        this.addressModel.setDistrict(createRestaurantRequest.getDistrict());
        this.addressModel.setStreet(createRestaurantRequest.getStreet());
        this.addressModel.setNumber(createRestaurantRequest.getNumber());
    }

    public AddressMapper(AddAddressToOrderRequest addAddressToOrderRequest) {
            this.addressModel = new AddressModel();
        this.addressModel.setCep(addAddressToOrderRequest.getCep());
        this.addressModel.setCity(addAddressToOrderRequest.getCity());
        this.addressModel.setState(addAddressToOrderRequest.getState());
        this.addressModel.setDistrict(addAddressToOrderRequest.getDistrict());
        this.addressModel.setStreet(addAddressToOrderRequest.getStreet());
        this.addressModel.setNumber(addAddressToOrderRequest.getNumber());
    }

    public AddressMapper(AddressModel addressModel) {
        this.addressResponse = new AddressResponse();
        this.addressResponse.setStreet(addressModel.getStreet());
        this.addressResponse.setNumber(addressModel.getNumber());
        this.addressResponse.setDistrict(addressModel.getDistrict());
        this.addressResponse.setCity(addressModel.getCity());
    }

    public AddressModel toModel(){
        return addressModel;
    }

    public AddressResponse toResponse(){ return addressResponse;}
}

