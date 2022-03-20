package br.com.simplifood.representation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StartSessionResponse {
    String status;
    String session;
    String token;
    String full;
    //teste
}
