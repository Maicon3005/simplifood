package br.com.simplifood.repository;

import br.com.simplifood.model.RestaurantModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepository extends JpaRepository<RestaurantModel, Integer> {

}
