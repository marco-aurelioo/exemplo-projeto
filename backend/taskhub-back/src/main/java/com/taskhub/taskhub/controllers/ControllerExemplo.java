package com.taskhub.taskhub.controllers;

import com.taskhub.taskhub.controllers.dto.ResponseMsg;
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
    public ResponseEntity<ResponseMsg> formatComent(@PathVariable("coment") String coment){

        return ResponseEntity.ok(new ResponseMsg(coment));
    }
}

