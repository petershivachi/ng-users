import { Component, OnInit, ViewChild } from '@angular/core';
import User from '../../models/User';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAddUser: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getData().subscribe(data => {
      console.log(data)
    })
     
   this.userService.getUsers().subscribe(users =>{
     this.users = users
   })

    this.loaded = true;

  }

  onSubmit({ value, valid }: 
    { value:User, valid: boolean}){

      if(!valid){
        console.log('Form is not valid');
      }else {
        value.isActive = true;
        value.registered = new Date();
        value.hide = true;

        this.userService.addUser(value);

        this.form.reset()
      }
  }

}
