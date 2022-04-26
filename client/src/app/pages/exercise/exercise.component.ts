import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-all',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {


  // Data
  exercises:Exercise[] =
  [
    {id:1,title:"1 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]},
    {id:2,title:"2 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]},
    {id:3,title:"3 exercise title",year:2023,status:true,date:["12/23/2022","23/12/2023"]}
  ]


  // popup managers
  activeElement:Exercise = this.exercises[0]
  showPopup:boolean = false
  showUpdatePopup:boolean = false
  showAddPopup:boolean = false
  activeUpdate:Exercise  = this.exercises[0]
  showDeletePopup:boolean = false


  // propreties
  id:number | null = null
  title:string = ""
  year:number | null = null
  startDate:string = ""
  endDate:string = ""
  status:boolean | null = null
  constructor() { }

  ngOnInit(): void {

  }

  showMore(id:number|null){
    this.activeElement = this.exercises.find(x => x.id === id) as Exercise
    this.showPopup = true
  }
  hideMore(){
    this.showPopup = false
  }

  showEdit(id:number|null){
    const exercise:Exercise = this.exercises.find(x => x.id === id) as Exercise
    this.id = exercise.id
    this.title = exercise.title
    this.year = exercise.year
    this.startDate = exercise.date[0]
    this.endDate = exercise.date[1]
    this.showUpdatePopup = true
  }
  hideUpdatePopup(){
    this.showUpdatePopup = false
  }

  showAdd(){
    this.title = ""
    this.year = null
    this.startDate = ""
    this.endDate = ""
    this.showAddPopup = true
  }
  hideAddPopup(){
    this.showAddPopup = false
  }

  showDelete(index:number){
    this.id = this.exercises[index].id
    this.title = this.exercises[index].title
    this.showDeletePopup = true
  }
  hideDeletePopup(){
    this.showDeletePopup = false
  }

  // data percistence
  updateExercise(){
    console.log(
      {
        id: this.id,
        title: this.title,
        year: this.year,
        startDate: this.startDate,
        endDate: this.endDate
      }
    )
  }
  addExercise(){
    console.log(
      {
        title: this.title,
        year: this.year,
        startDate: this.startDate,
        endDate: this.endDate
      }
    )
  }
  deleteExercise(){
    this.showDeletePopup = false
    console.log({id:this.id,title:this.title});
  }

}
