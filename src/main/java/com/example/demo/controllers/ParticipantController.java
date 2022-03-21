package com.example.demo.controllers;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/participant")
public class ParticipantController {

    @GetMapping("/")
    public String getAll(){
        return null;
    }

    @GetMapping("/find/{id}")
    public String find(@PathVariable("id") long id){
        return null;
    }

    @GetMapping("/edit/{id}")
    public String edit(@PathVariable("id") long id){
        return null;
    }

    @PostMapping("/update")
    public String update(){
        return null;
    }

    @GetMapping("/add")
    public String add(){
        return null;
    }

    @PostMapping("/store")
    public String store(){
        return null;
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable("id") long id){
        return null;
    }
}
