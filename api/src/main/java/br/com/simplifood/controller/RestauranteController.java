package br.com.simplifood.controller;

import br.com.simplifood.representation.restaurant.CreateRestaurantRequest;
import br.com.simplifood.representation.restaurant.CreateRestaurantResponse;
import br.com.simplifood.representation.restaurant.RestaurantNameResponse;
import br.com.simplifood.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/restaurant")
public class RestauranteController {

    @Autowired
    RestaurantService restaurantService;

    @PostMapping("/save")
    public ResponseEntity<CreateRestaurantResponse> saveRestaurant(@RequestBody CreateRestaurantRequest createRestaurantRequest){
        return ResponseEntity.ok(restaurantService.saveRestaurant(createRestaurantRequest));
    }

    @GetMapping("/getname")
    public ResponseEntity<RestaurantNameResponse> getName(){
        RestaurantNameResponse restaurantNameResponse = restaurantService.getNameRestaurant();
        return restaurantNameResponse != null ? ResponseEntity.ok().body(restaurantNameResponse) : ResponseEntity.notFound().build();
    }

}
