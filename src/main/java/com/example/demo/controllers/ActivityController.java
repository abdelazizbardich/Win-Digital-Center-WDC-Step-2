package com.example.demo.controllers;

import com.example.demo.Services.ActivityService;
import com.example.demo.models.Activity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activity")
public class ActivityController {

    private final ActivityService activityService;

    @Autowired
    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }

    @GetMapping("/")
    public List<Activity> getAll(){
        return activityService.getAll();
    }

    @GetMapping("/find/{id}")
    public Activity find(@PathVariable("id") Long id){
        return activityService.get(id);
    }

    @PutMapping("/update/{id}")
    public Activity update(@RequestBody Activity activity,@PathVariable("id") Long id){
        activity.setActivityId(id);
        return activityService.update(activity);
    }

    @PostMapping("/add")
    public Activity store(@RequestBody Activity activity){
        return activityService.add(activity);
    }

    @DeleteMapping("/delete")
    public Boolean delete(Activity activity){
        return activityService.delete(activity);
    }
}
