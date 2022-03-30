package br.com.simplifood.repository;

import br.com.simplifood.model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Integer> {

    List<ProductModel> findByCategoryModelId(@Param("name") Integer id);
}
