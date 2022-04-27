import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsible',
  templateUrl: './responsible.component.html',
  styleUrls: ['./responsible.component.scss']
})
export class ResponsibleComponent implements OnInit {

  // Data
  responsibles:Responsible[] =
  [
    {id:1,firstname:"1 first name",lastname:"1 last name",login:"username",phone:"+212612345678",email:"responsible1@email.com",status:true,domain:"simple domain",password:"password1234"},
    {id:2,firstname:"2 first name",lastname:"2 last name",login:"username",phone:"+212612345678",email:"responsible2@email.com",status:true,domain:"simple domain",password:"password1234"},
    {id:3,firstname:"3 first name",lastname:"3 last name",login:"username",phone:"+212612345678",email:"responsible3@email.com",status:true,domain:"simple domain",password:"password1234"}
  ]


  // popup managers
  showUpdatePopup:boolean = false
  showAddPopup:boolean = false
  activeUpdate:Responsible  = this.responsibles[0]
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
  Password:string = ""
  newPassword:string = ""
  constructor() { }

  ngOnInit(): void {

  }

  showEdit(id:number|null){
    const responsible:Responsible = this.responsibles.find(x => x.id === id) as Responsible
    this.id = responsible.id
    this.firstName = responsible.firstname
    this.lastName = responsible.lastname
    this.login = responsible.login
    this.phone = responsible.phone
    this.email = responsible.email
    this.status = responsible.status
    this.domain = responsible.domain
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
    this.showAddPopup = true
  }
  hideAddPopup(){
    this.showAddPopup = false
  }

  showDelete(index:number){
    this.id = this.responsibles[index].id
    this.firstName = this.responsibles[index].firstname
    this.lastName = this.responsibles[index].lastname
    this.showDeletePopup = true
  }
  hideDeletePopup(){
    this.showDeletePopup = false
  }

  // data percistence
  updateResponsible(){
    console.log(
      {
        id: this.id,
        firstname: this.firstName,
        lastname: this.lastName,
        login: this.login,
        phone: this.phone,
        email: this.email,
        status: this.status,
        domain: this.domain
      }
    )
  }
  addResponsible(){
    console.log(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        login: this.login,
        phone: this.phone,
        email: this.email,
        status: this.status,
        domain: this.domain
      }
    )
  }
  deleteResponsible(){
    this.showDeletePopup = false
    console.log({id:this.id,firstname: this.firstName,lastname: this.lastName});
  }


}
