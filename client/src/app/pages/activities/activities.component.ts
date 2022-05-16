import { ActivityService } from './../../services/activity/activity.service';
import { Component, OnInit,Input, Output } from '@angular/core'
import "../../../types"
import { Activity } from 'src/objects/Activity';
import { Exercise } from 'src/objects/Exercise';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {


  // Data
  activities:Activity[] =
  [
    {id:1,title:"1 Simple title...",description:"Simple description...",type:"Formation",status:true,date:["12/23/2022","23/12/2023"],exercise:
      {id:1,title:"1 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]}
    },
    {id:2,title:"2 Simple title...",description:"Simple description...",type:"Événement",status:false,date:["12/23/2022","23/12/2023"],exercise:
      {id:2,title:"2 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]}
    },
    {id:3,title:"3 Simple title...",description:"Simple description...",type:"Talk",status:true,date:["12/23/2022","23/12/2023"],exercise:
      {id:3,title:"3 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]}
    }
  ]
  exercises:Exercise[] = [
    {id:1,title:"1 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]},
    {id:2,title:"2 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]},
    {id:3,title:"3 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]},
    {id:4,title:"4 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]},
    {id:5,title:"5 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]}
  ]


  // popup managers
  activeElement:Activity = this.activities[0]
  showPopup:boolean = false
  showUpdatePopup:boolean = false
  showAddPopup:boolean = false
  activeUpdate:Activity  = this.activities[0]
  showDeletePopup:boolean = false


  // propreties
  id:number | null = null
  title:string = ""
  startDate:string = ""
  endDate:string = ""
  type:string = ""
  exerciseId:number | null = null
  description:string = ""
  constructor(private activityService:ActivityService) { }

  ngOnInit(): void {
    let data : Activity = this.activityService.getAll();
    console.log(data);
  }

  showMore(id:number|null){
    this.activeElement = this.activities.find(x => x.id === id) as Activity
    this.showPopup = true
  }
  hideMore(){
    this.showPopup = false
  }

  showEdit(id:number|null){
    const activity:Activity = this.activities.find(x => x.id === id) as Activity
    this.id = activity.id
    this.title = activity.title
    this.startDate = activity.date[0]
    this.endDate = activity.date[1]
    this.type = activity.type
    this.exerciseId = activity.exercise.id as number
    this.description = activity.description
    this.showUpdatePopup = true
  }
  hideUpdatePopup(){
    this.showUpdatePopup = false
  }

  showAdd(){
    this.title = ""
    this.startDate = ""
    this.endDate = ""
    this.type = ""
    this.exerciseId = null
    this.description = ""
    this.showAddPopup = true
  }
  hideAddPopup(){
    this.showAddPopup = false
  }

  showDelete(index:number){
    this.id = this.activities[index].id
    this.title = this.activities[index].title
    this.showDeletePopup = true
  }
  hideDeletePopup(){
    this.showDeletePopup = false
  }

  // data percistence
  updateActivity(){
    console.log(
      {
        id: this.id,
        title: this.title,
        startDate: this.startDate,
        endDate: this.endDate,
        type: this.type,
        exerciseId: this.exerciseId as number,
        description: this.description
      }
    )
  }
  addActivity(){
    console.log(
      {
        title: this.title,
        startDate: this.startDate,
        endDate: this.endDate,
        type: this.type,
        exerciseId: this.exerciseId as number,
        description: this.description
      }
    )
  }
  deleteActivity(){
    this.showDeletePopup = false
    console.log({id:this.id,title:this.title});
  }
}
