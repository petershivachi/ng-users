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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();

    this.loaded = true;

  }

  // addUser(){
  //   this.user.isActive = true;

  //   this.user.registered = Date.now();
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   }
  // }

  // toggleUser(user: User){
  //   user.hide = !user.hide;
  // }

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
