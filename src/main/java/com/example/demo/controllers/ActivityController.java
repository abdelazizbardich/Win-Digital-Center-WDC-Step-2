package com.example.demo.controllers;

import com.example.demo.models.Activity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activity")
public class ActivityController {

    @GetMapping("/")
    public List<Activity> getAll(){
        return List.of(
                new Activity(),
                new Activity(),
                new Activity(),
                new Activity(),
                new Activity(),
                new Activity()
        );
    }

    @GetMapping("/find/{id}")
    public Activity find(@PathVariable("id") String id){
        return new Activity();
    }

    @PostMapping("/update/{id}")
    public Activity update(@RequestBody Activity activity,@PathVariable("id") Long id){
        activity.setActivityId(id);
        return activity;
    }

    @PostMapping("/add")
    public Activity store(@RequestBody Activity activity){
        return activity;
    }
}
