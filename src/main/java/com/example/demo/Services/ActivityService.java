package com.example.demo.Services;

import com.example.demo.Repositories.ActivityRepository;
import com.example.demo.models.Activity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService implements Services<Activity> {

    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @Override
    public List<Activity> getAll() {
        return (List<Activity>) activityRepository.findAll();
    }

    @Override
    public Activity get(Long id) {
        return activityRepository.findById(id).get();
    }

    @Override
    public Activity add(Activity activity) {
        return activityRepository.save(activity);
    }

    @Override
    public Activity update(Activity activity) {
        return activityRepository.save(activity);
    }

    @Override
    public boolean delete(Activity activity) {
        try {
            activityRepository.delete(activity);
            return true;
        }catch (DataAccessException e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}
