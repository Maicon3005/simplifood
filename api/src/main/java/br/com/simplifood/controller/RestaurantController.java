package br.com.simplifood.controller;

import br.com.simplifood.representation.RestaurantWIthAddressRequest;
import br.com.simplifood.service.RestaurantWithAddressService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/restaurant")
public class RestaurantController {

    private final RestaurantWithAddressService restaurantWithAddressService;

    public RestaurantController(RestaurantWithAddressService restaurantWithAddressService) {
        this.restaurantWithAddressService = restaurantWithAddressService;
    }

    @PostMapping("/save")
    private ResponseEntity<String> saveRestaurantWithAddress(@RequestBody RestaurantWIthAddressRequest restaurantWIthAddressRequest) {

        restaurantWithAddressService.saveRestaurantWithAddress(restaurantWIthAddressRequest);

        return null;
    }

}
