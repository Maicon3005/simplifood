package br.com.simplifood.service;

import br.com.simplifood.model.UsuarioModel;
import br.com.simplifood.repository.UsuarioRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    private final PasswordEncoder encoder;
    private final UsuarioRepository usuarioRepository;


    public UsuarioService(PasswordEncoder encoder, UsuarioRepository usuarioRepository) {
        this.encoder = encoder;
        this.usuarioRepository = usuarioRepository;
    }

    public UsuarioModel salvarUsuario(UsuarioModel usuario){
        usuario.setSenha(encoder.encode(usuario.getSenha()));
        return usuarioRepository.save(usuario);
    }

    public boolean validarSenha(String email, String senha){
        Optional<UsuarioModel> optUsuario = usuarioRepository.findByEmail(email);
        if(optUsuario.isEmpty()){
            return false;
        }
        UsuarioModel usuarioModel = optUsuario.get();
        return encoder.matches(senha, usuarioModel.getSenha());
    }
}
