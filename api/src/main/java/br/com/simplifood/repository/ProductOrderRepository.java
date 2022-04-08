package br.com.simplifood.repository;

import br.com.simplifood.model.ProductOrderModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductOrderRepository extends JpaRepository<ProductOrderModel, Integer> {
}
