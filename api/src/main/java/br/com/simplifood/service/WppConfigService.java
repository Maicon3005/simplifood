package br.com.simplifood.service;

import br.com.simplifood.config.WppConnectConfig;
import br.com.simplifood.representation.wppapi.StartSessionResponse;
import org.springframework.stereotype.Service;

@Service
public class WppConfigService {

    public void setToken(StartSessionResponse startSessionResponse){
        WppConnectConfig.wpp_token = startSessionResponse.getToken();
    }

    public String getToken(){
        String token = WppConnectConfig.getWpp_token();
        return token;
    }
}
