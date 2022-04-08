package br.com.simplifood.repository;

import br.com.simplifood.model.ProductOrderModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductOrderRepository extends JpaRepository<ProductOrderModel, Integer> {

    List<ProductOrderModel> findByOrderModel(Integer idOrder);

}
