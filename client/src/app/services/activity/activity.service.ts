import { Injectable } from '@angular/core';

// import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Activity } from 'src/objects/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }

  getAll() : any {
    return this.http.get<Activity>('http://localhost:8080/activity')
  }
}
