package br.com.simplifood.service;

import br.com.simplifood.data.DetailUserData;
import br.com.simplifood.model.UserModel;
import br.com.simplifood.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DetailUserServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public DetailUserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserModel> user= userRepository.findByEmail(username);
        if(user.isEmpty()){
            throw new UsernameNotFoundException("Usuário [" + username +"] não encontrado!");
        }
        return new DetailUserData(user);
    }
}
