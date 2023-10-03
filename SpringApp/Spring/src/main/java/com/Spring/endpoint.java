package com.Spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class endpoint {
    @GetMapping("/api/ballz")
    public String all() {
        return "Justice is a dish best served cold, if it were served warm it would be just water.";
    }

        @GetMapping("/api/dadjokes")
        public String dadJokes() {
            return "Justice is a dish best served cold, if it were served warm it would be just water.";
        }
}