package com.taskhub.taskhub.controllers.dto;


public class ResponseMsg {
    private String msg;

    public ResponseMsg(String coment) {
        this.msg = coment;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
