package br.com.simplifood.controller;

import br.com.simplifood.representation.cep.FindCepRequest;
import br.com.simplifood.representation.cep.FindCepResponse;
import br.com.simplifood.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping("/getaddress")
    public ResponseEntity<FindCepResponse> getAddressByCep(@RequestBody FindCepRequest findCepRequest){
        FindCepResponse findCepResponse = addressService.getAddressByCep(findCepRequest.getCep());
        return findCepResponse != null ? ResponseEntity.ok().body(findCepResponse) : ResponseEntity.notFound().build();
    }
}
