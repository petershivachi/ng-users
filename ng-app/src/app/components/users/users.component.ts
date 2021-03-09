import { Component, OnInit, ViewChild } from '@angular/core';
import User from '../../models/User';

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

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/03/2021 7:30:00'),
        hide: true
      },
      {
        firstName: 'Jill',
        lastName: 'Robbinson',
        email: 'jill@gmail.com',
        isActive: false,
        registered: new Date('02/03/2021 8:30:00'),
        hide: true
      },
      {
        firstName: 'Jack',
        lastName: 'Jason',
        email: 'jack@gmail.com',
        isActive: true,
        registered: new Date('03/03/2021 9:30:00'),
        hide: true
      },
      {
        firstName: 'Steve',
        lastName: 'Smith',
        email: 'steve@gmail.com',
        isActive: false,
        registered: new Date('04/03/2021 10:30:00'),
        hide: true
      },
      {
        firstName: 'Mark',
        lastName: 'Brad',
        email: 'mark@gmail.com',
        isActive: true,
        registered: new Date('05/03/2021 12:30:00'),
        hide: true
      }
    ]

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

        this.users.unshift(value);

        this.form.reset()
      }
  }

}
