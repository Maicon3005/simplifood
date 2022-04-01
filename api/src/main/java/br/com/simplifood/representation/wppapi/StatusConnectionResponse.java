package br.com.simplifood.representation.wppapi;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StatusConnectionResponse {
    boolean status;
    String message;
}
