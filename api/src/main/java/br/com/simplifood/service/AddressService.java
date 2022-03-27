package br.com.simplifood.service;

import br.com.simplifood.representation.FindCepResponse;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(url = "https://viacep.com.br/", name = "viacep")
public interface AddressService {

    @RequestMapping(method = RequestMethod.GET, value = "ws/{cep}/json")
    @Cacheable("placementUseCase")
    FindCepResponse getAddressByCep(@PathVariable String cep);
}
