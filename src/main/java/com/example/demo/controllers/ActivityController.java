package com.example.demo.controllers;

import com.example.demo.Services.ActivityService;
import com.example.demo.models.Activity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/activity")
@ResponseBody
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
    public ResponseEntity<Activity> find(@PathVariable("id") Long id){
        try {
            return ResponseEntity.status(HttpStatus.FOUND).body(activityService.get(id));
        }catch (NoSuchElementException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
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
