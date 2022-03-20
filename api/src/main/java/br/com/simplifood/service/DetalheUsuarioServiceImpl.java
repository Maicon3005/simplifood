package br.com.simplifood.service;

import br.com.simplifood.data.DetalheUsuarioData;
import br.com.simplifood.model.UsuarioModel;
import br.com.simplifood.repository.UsuarioRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DetalheUsuarioServiceImpl implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public DetalheUsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UsuarioModel> usuario = usuarioRepository.findByEmail(username);
        if(usuario.isEmpty()){
            throw new UsernameNotFoundException("Usuário [" + username +"] não encontrado!");
        }
        return new DetalheUsuarioData(usuario);
    }
}
