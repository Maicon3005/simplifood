package br.com.simplifood.mapper;

import br.com.simplifood.model.AddressModel;
import br.com.simplifood.representation.CreateUserRequest;

public class AddressToModelMapper {

    private AddressModel addressModel;

    public AddressToModelMapper(CreateUserRequest createUserRequest) {
        this.addressModel = new AddressModel();
        this.addressModel.setCep(createUserRequest.getCep());
        this.addressModel.setCity(createUserRequest.getCity());
        this.addressModel.setState(createUserRequest.getState());
        this.addressModel.setDistrict(createUserRequest.getDistrict());
        this.addressModel.setStreet(createUserRequest.getStreet());
        this.addressModel.setNumber(createUserRequest.getNumber());
    }

    public AddressModel toModel(){
        return addressModel;
    }
}

