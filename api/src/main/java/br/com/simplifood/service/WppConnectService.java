package br.com.simplifood.service;

import br.com.simplifood.representation.StartSessionResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(url = "http://localhost:21465/api/mySession/", name = "wppconnect")
public interface WppConnectService {

    @PostMapping("TOKEN_WPP_CONNECT/generate-token")
    StartSessionResponse getTokenWPPConnect();
}
