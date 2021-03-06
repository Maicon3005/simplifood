package br.com.simplifood.security;

import br.com.simplifood.service.DetailUserServiceImpl;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class JWTConfiguration extends WebSecurityConfigurerAdapter {

    private final DetailUserServiceImpl usuarioService;
    private final PasswordEncoder passwordEncoder;

    public JWTConfiguration(DetailUserServiceImpl usuarioService, PasswordEncoder passwordEncoder) {
        this.usuarioService = usuarioService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(usuarioService).passwordEncoder(passwordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests().
                antMatchers(HttpMethod.POST, "/login",
                        "/user/save",
                        "/restaurant/save",
                        "/order/create",
                        "/order/addproduct",
                        "/address/getaddress",
                        "/order/saveaddress",
                        "/order/confirmnumber/**",
                        "/send").
                permitAll().
                antMatchers(HttpMethod.GET, "/category/getall",
                        "/product/getall/**",
                        "/product/get/**",
                        "/product/calculateprice/**",
                        "/order/getbasicorder/**",
                        "/order/getitens/**",
                        "/restaurant/getname",
                        "/order/getnumberverify/**").
                permitAll().
                anyRequest().
                authenticated().
                and().
                addFilter(new JWTAutenticarFilter(authenticationManager())).
                addFilter(new JWTValidarFilter(authenticationManager())).
                sessionManagement().
                sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
}
