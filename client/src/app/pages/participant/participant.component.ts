import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/objects/Participant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {



  // Data
  participants:Participant[] =
  [
    {id:1,firstname:"1 first name",lastname:"1 last name",login:"username",phone:"+212612345678",email:"participant1@email.com",status:true,domain:"simple domain",structure:"simple structure",password:"password1234"},
    {id:2,firstname:"2 first name",lastname:"2 last name",login:"username",phone:"+212612345678",email:"participant2@email.com",status:true,domain:"simple domain",structure:"simple structure",password:"password1234"},
    {id:3,firstname:"3 first name",lastname:"3 last name",login:"username",phone:"+212612345678",email:"participant3@email.com",status:true,domain:"simple domain",structure:"simple structure",password:"password1234"}
  ]


  // popup managers
  showUpdatePopup:boolean = false
  showAddPopup:boolean = false
  activeUpdate:Participant  = this.participants[0]
  showDeletePopup:boolean = false


  // propreties
  id:number|null = null
  firstName:string = ""
  lastName:string = ""
  login:string = ""
  phone:string = ""
  email:string = ""
  status:boolean = false
  domain:string = ""
  structure:string = ""
  Password:string = ""
  newPassword:string = ""
  constructor() { }

  ngOnInit(): void {

  }

  showEdit(id:number|null){
    const participant:Participant = this.participants.find(x => x.id === id) as Participant
    this.id = participant.id
    this.firstName = participant.firstname
    this.lastName = participant.lastname
    this.login = participant.login
    this.phone = participant.phone
    this.email = participant.email
    this.status = participant.status
    this.domain = participant.domain
    this.structure = participant.structure
    this.showUpdatePopup = true
  }
  hideUpdatePopup(){
    this.showUpdatePopup = false
  }

  showAdd(){
    this.id = null
    this.firstName = ""
    this.lastName = ""
    this.login = ""
    this.phone = ""
    this.email = ""
    this.status = false
    this.domain = ""
    this.structure = ""
    this.showAddPopup = true
  }
  hideAddPopup(){
    this.showAddPopup = false
  }

  showDelete(index:number){
    this.id = this.participants[index].id
    this.firstName = this.participants[index].firstname
    this.lastName = this.participants[index].lastname
    this.showDeletePopup = true
  }
  hideDeletePopup(){
    this.showDeletePopup = false
  }

  // data percistence
  updateParticipant(){
    console.log(
      {
        id: this.id,
        firstname: this.firstName,
        lastname: this.lastName,
        login: this.login,
        phone: this.phone,
        email: this.email,
        status: this.status,
        domain: this.domain,
        structure: this.structure
      }
    )
  }
  addParticipant(){
    console.log(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        login: this.login,
        phone: this.phone,
        email: this.email,
        status: this.status,
        domain: this.domain,
        structure: this.structure
      }
    )
  }
  deleteParticipant(){
    this.showDeletePopup = false
    console.log({id:this.id,firstname: this.firstName,lastname: this.lastName});
  }


}
