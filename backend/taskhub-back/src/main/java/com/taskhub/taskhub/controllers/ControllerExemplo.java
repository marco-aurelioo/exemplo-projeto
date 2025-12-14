package com.taskhub.taskhub.controllers;

import jakarta.websocket.server.PathParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ControllerExemplo {


    @GetMapping("/coment/{coment}")
    public ResponseEntity<String> formatComent(@PathVariable("coment") String coment){
        return ResponseEntity.ok(String.format("Comentario: %s",coment));
    }
}
