package br.com.simplifood.controller;

import br.com.simplifood.model.UsuarioModel;
import br.com.simplifood.repository.UsuarioRepository;
import br.com.simplifood.service.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder encoder;
    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioRepository usuarioRepository, PasswordEncoder encoder, UsuarioService usuarioService) {
        this.usuarioRepository = usuarioRepository;
        this.encoder = encoder;
        this.usuarioService = usuarioService;
    }

    @PostMapping("/salvar")
    public ResponseEntity<UsuarioModel> salvarUsuario(@RequestBody UsuarioModel usuario){
        return ResponseEntity.ok(usuarioService.salvarUsuario(usuario));
    }

    @GetMapping("/validarSenha")
    public ResponseEntity<Boolean> validarSenha(@RequestParam String email,
                                                @RequestParam String senha){
        boolean valid = usuarioService.validarSenha(email,senha);
        if(valid){
            return ResponseEntity.ok(valid);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(valid);
    }

}
