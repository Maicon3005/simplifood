package br.com.simplifood.repository;

import br.com.simplifood.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserModel, Integer> {

    public Optional<UserModel> findByEmail(String email);

}
