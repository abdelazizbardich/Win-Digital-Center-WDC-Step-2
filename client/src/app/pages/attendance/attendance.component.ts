import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/objects/Activity';
import { Attendance } from 'src/objects/Attendance';
import { Participant } from 'src/objects/Participant';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  // Data
  attendances:Attendance[] =
  [
    {id:1,participant:{id:1,firstname:"firstname 1",lastname:"lastname 1",login:"username 1",phone:"+212611111111",email:"participant1@email.com",status:false,domain:"domain 1",structure:"structure 1",password:"pass1111"},activity:{id:1,title:"title 1",description:"description 1",type:"type 1",status:false,date:["11/11/1111","11/11/1111"],exercise:{id:1,title:"title 1",year:1111,status:false,date:["11/11/1111","11/11/1111"]}},present:true},
    {id:2,participant:{id:1,firstname:"firstname 1",lastname:"lastname 1",login:"username 1",phone:"+212611111111",email:"participant1@email.com",status:false,domain:"domain 1",structure:"structure 1",password:"pass1111"},activity:{id:1,title:"title 1",description:"description 1",type:"type 1",status:false,date:["11/11/1111","11/11/1111"],exercise:{id:1,title:"title 1",year:1111,status:false,date:["11/11/1111","11/11/1111"]}},present:true},
    {id:3,participant:{id:1,firstname:"firstname 1",lastname:"lastname 1",login:"username 1",phone:"+212611111111",email:"participant1@email.com",status:false,domain:"domain 1",structure:"structure 1",password:"pass1111"},activity:{id:1,title:"title 1",description:"description 1",type:"type 1",status:false,date:["11/11/1111","11/11/1111"],exercise:{id:1,title:"title 1",year:1111,status:false,date:["11/11/1111","11/11/1111"]}},present:true},
    {id:4,participant:{id:1,firstname:"firstname 1",lastname:"lastname 1",login:"username 1",phone:"+212611111111",email:"participant1@email.com",status:false,domain:"domain 1",structure:"structure 1",password:"pass1111"},activity:{id:1,title:"title 1",description:"description 1",type:"type 1",status:false,date:["11/11/1111","11/11/1111"],exercise:{id:1,title:"title 1",year:1111,status:false,date:["11/11/1111","11/11/1111"]}},present:true},
    {id:5,participant:{id:1,firstname:"firstname 1",lastname:"lastname 1",login:"username 1",phone:"+212611111111",email:"participant1@email.com",status:false,domain:"domain 1",structure:"structure 1",password:"pass1111"},activity:{id:1,title:"title 1",description:"description 1",type:"type 1",status:false,date:["11/11/1111","11/11/1111"],exercise:{id:1,title:"title 1",year:1111,status:false,date:["11/11/1111","11/11/1111"]}},present:true}
  ]

  activities:Activity[] = [
    {id:1,title:"title 1",description:"description 1",type:"type 1",status:false,date:["11/11/1111","11/11/1111"],exercise:
      {id:1,title:"title 1",year:1111,status:false,date:["11/11/1111","11/11/1111"]}
    },
    {id:2,title:"title 2",description:"description 2",type:"type 2",status:false,date:["22/22/2222","22/22/2222"],exercise:
      {id:2,title:"title 2",year:2222,status:false,date:["22/22/2222","22/22/2222"]}
    },
     {id:3,title:"title 3",description:"description 3",type:"type 3",status:true,date:["33/33/3333","33/33/3333"],exercise:
      {id:3,title:"title 3",year:3333,status:false,date:["33/33/3333","33/33/3333"]}
    },
    {id:4,title:"title 4",description:"description 4",type:"type 4",status:false,date:["44/44/4444","44/44/4444"],exercise:
      {id:4,title:"title 4",year:4444,status:false,date:["44/44/4444","44/44/4444"]}
    },
  ]
  participants:Participant[] = [
    {id:1,firstname:"firstname 1",lastname:"lastname 1",login:"username 1",phone:"+212611111111",email:"participant1@email.com",status:false,domain:"domain 1",structure:"structure 1",password:"pass1111"},
    {id:2,firstname:"firstname 2",lastname:"lastname 2",login:"username 2",phone:"+212622222222",email:"participant2@email.com",status:false,domain:"domain 2",structure:"structure 2",password:"pass2222"},
    {id:3,firstname:"firstname 3",lastname:"lastname 3",login:"username 3",phone:"+212633333333",email:"participant3@email.com",status:false,domain:"domain 3",structure:"structure 3",password:"pass3333"},
    {id:4,firstname:"firstname 4",lastname:"lastname 4",login:"username 4",phone:"+212644444444",email:"participant4@email.com",status:false,domain:"domain 4",structure:"structure 4",password:"pass4444"},
    {id:5,firstname:"firstname 5",lastname:"lastname 5",login:"username 5",phone:"+212655555555",email:"participant5@email.com",status:false,domain:"domain 5",structure:"structure 5",password:"pass5555"},
  ]


  // popup managers
  // showUpdatePopup:boolean = false
  // showAddPopup:boolean = false
  showDeletePopup:boolean = false


  // propreties
  id:number|null = null
  participantId:number = 0
  activityId:number = 0
  present:boolean = false
  activityTitle:string = ""


  constructor() { }

  ngOnInit(): void {

  }

  // showEdit(id:number|null){
  //   const attendance:Attendance = this.attendances.find(x => x.id === id) as Attendance
  //   this.id = attendance.id
  //   this.participantId = attendance.participant
  //   this.activityId = attendance.activity
  //   this.present = attendance.present
  //   this.showUpdatePopup = true
  // }
  // hideUpdatePopup(){
  //   this.showUpdatePopup = false
  // }

  // showAdd(){
  //   this.id = null
  //   this.id = null
  //   this.participantId = 0
  //   this.activityId = 0
  //   this.present = false
  //   this.showAddPopup = true
  // }
  // hideAddPopup(){
  //   this.showAddPopup = false
  // }

  showDelete(index:number){
    this.id = this.attendances[index].id
    let activity:Activity = this.activities.find((activity) => { return activity.id == this.attendances[index].participant.id}) as Activity
    this.activityTitle = activity.title
    this.showDeletePopup = true
  }
  hideDeletePopup(){
    this.showDeletePopup = false
  }

  // data percistence
  updateAttendance(){
    console.log(
      {
        id: this.id,
        participantId: this.participantId,
        activityId: this.activityId,
        present: this.present
      }
    )
  }
  setAttendance(){
    console.log(
      {
        participantId: this.participantId,
        activityId: this.activityId,
        present: this.present
      }
    )
  }
  deleteAttendance(){
    this.showDeletePopup = false
    console.log({id:this.id,participant:this.participantId,activity:this.activityId});
  }

}
