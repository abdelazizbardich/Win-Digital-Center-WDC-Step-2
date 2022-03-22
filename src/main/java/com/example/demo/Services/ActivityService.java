package com.example.demo.Services;

import com.example.demo.Repositories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ActivityService {

    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }
}
