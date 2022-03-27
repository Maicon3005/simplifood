package br.com.simplifood.controller;

import br.com.simplifood.representation.CreateRestaurantRequest;
import br.com.simplifood.representation.CreateRestaurantResponse;
import br.com.simplifood.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/restaurant")
public class RestauranteController {

    @Autowired
    RestaurantService restaurantService;

    @PostMapping("/save")
    public ResponseEntity<CreateRestaurantResponse> saveRestaurant(@RequestBody CreateRestaurantRequest createRestaurantRequest){
        return ResponseEntity.ok(restaurantService.saveRestaurant(createRestaurantRequest));
    }

}
