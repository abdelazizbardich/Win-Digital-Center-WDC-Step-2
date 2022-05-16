import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/objects/Admin';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  // Data
  admins:Admin[] =
  [
    {id:1,firstname:"1 first name",lastname:"1 last name",login:"username",phone:"+212612345678",email:"admin1@email.com",status:true,password:"password1234"},
    {id:2,firstname:"2 first name",lastname:"2 last name",login:"username",phone:"+212612345678",email:"admin2@email.com",status:true,password:"password1234"},
    {id:3,firstname:"3 first name",lastname:"3 last name",login:"username",phone:"+212612345678",email:"admin3@email.com",status:true,password:"password1234"}
  ]


  // popup managers
  showUpdatePopup:boolean = false
  showAddPopup:boolean = false
  activeUpdate:Admin  = this.admins[0]
  showDeletePopup:boolean = false


  // propreties
  id:number|null = null
  firstName:string = ""
  lastName:string = ""
  login:string = ""
  phone:string = ""
  email:string = ""
  status:boolean = false
  password:string = ""
  newPassword:string = ""
  constructor() { }

  ngOnInit(): void {

  }

  showEdit(id:number|null){
    const admin:Admin = this.admins.find(x => x.id === id) as Admin
    this.id = admin.id
    this.firstName = admin.firstname
    this.lastName = admin.lastname
    this.login = admin.login
    this.phone = admin.phone
    this.email = admin.email
    this.status = admin.status
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
    this.password = ""
    this.newPassword = ""
    this.showAddPopup = true
  }
  hideAddPopup(){
    this.showAddPopup = false
  }

  showDelete(index:number){
    this.id = this.admins[index].id
    this.firstName = this.admins[index].firstname
    this.lastName = this.admins[index].lastname
    this.showDeletePopup = true
  }
  hideDeletePopup(){
    this.showDeletePopup = false
  }

  // data percistence
  updateAdmin(){
    console.log(
      {
        id: this.id,
        firstname: this.firstName,
        lastname: this.lastName,
        login: this.login,
        phone: this.phone,
        email: this.email,
        status: this.status,
        oldPassword: this.password,
        password: this.newPassword
      }
    )
  }
  addAdmin(){
    console.log(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        login: this.login,
        phone: this.phone,
        email: this.email,
        status: this.status,
        password: this.password
      }
    )
  }
  deleteAdmin(){
    this.showDeletePopup = false
    console.log({id:this.id,firstname: this.firstName,lastname: this.lastName});
  }

}
