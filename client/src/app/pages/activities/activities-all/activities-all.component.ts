import { Component, OnInit } from '@angular/core';
import "../../../../types"
@Component({
  selector: 'app-activities-all',
  templateUrl: './activities-all.component.html',
  styleUrls: ['./activities-all.component.scss']
})
export class ActivitiesAllComponent implements OnInit {

  activities:Activity[] =
  [
    {id:null,title:"Simple title...",description:"Simple description...",type:"simple type",status:true,date:["23/12/2022","23/12/2023"],exercise:[
      {id:null,title:"exercise titme",year:2023,status:true,date:["23/12/2022","23/12/2023"]},
      {id:null,title:"exercise titme",year:2023,status:true,date:["23/12/2022","23/12/2023"]},
      {id:null,title:"exercise titme",year:2023,status:true,date:["23/12/2022","23/12/2023"]}
    ]},
    {id:null,title:"Simple title...",description:"Simple description...",type:"simple type",status:false,date:["23/12/2022","23/12/2023"],exercise:[
      {id:null,title:"exercise titme",year:2023,status:true,date:["23/12/2022","23/12/2023"]},
      {id:null,title:"exercise titme",year:2023,status:true,date:["23/12/2022","23/12/2023"]},
      {id:null,title:"exercise titme",year:2023,status:true,date:["23/12/2022","23/12/2023"]}
    ]},
    {id:null,title:"Simple title...",description:"Simple description...",type:"simple type",status:true,date:["23/12/2022","23/12/2023"],exercise:[
      {id:null,title:"exercise titme",year:2023,status:true,date:["23/12/2022","23/12/2023"]},
      {id:null,title:"exercise titme",year:2023,status:true,date:["23/12/2022","23/12/2023"]},
      {id:null,title:"exercise titme",year:2023,status:true,date:["23/12/2022","23/12/2023"]}
    ]}
  ]
  activeElement:Activity = this.activities[0];
  showPopup:boolean = false
  constructor() { }

  ngOnInit(): void {
  }


  showMore(id:number){
    this.activeElement = this.activities[id]
    this.showPopup = true;
  }
  hideMore(){
    this.showPopup = false;
  }

  showEdit(id:number|null){

  }

}
