import { Component, OnInit } from '@angular/core';
import User from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAddUser: boolean = true;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 28,
        address: {
          street: '55 Main Street',
          city: 'Nairobi',
          estate: 'South C'
        },
        isActive: true,
        registered: new Date('01/03/2021 7:30:00'),
        hide: true
      },
      {
        firstName: 'Jill',
        lastName: 'Robbinson',
        age: 22,
        address: {
          street: '55 Ladhies Road',
          city: 'Nairobi',
          estate: 'Makadara'
        },
        isActive: false,
        registered: new Date('02/03/2021 8:30:00'),
        hide: true
      },
      {
        firstName: 'Jack',
        lastName: 'Jason',
        age: 44,
        address: {
          street: '48 Ring Road',
          city: 'Nairobi',
          estate: 'South B'
        },
        isActive: true,
        registered: new Date('03/03/2021 9:30:00'),
        hide: true
      },
      {
        firstName: 'Steve',
        lastName: 'Smith',
        age: 25,
        address: {
          street: '55 Enterprise Road',
          city: 'Nairobi',
          estate: 'Industrial Area'
        },
        isActive: false,
        registered: new Date('04/03/2021 10:30:00'),
        hide: true
      },
      {
        firstName: 'Mark',
        lastName: 'Brad',
        age: 28,
        address: {
          street: '18 Main Street',
          city: 'Nairobi',
          estate: 'Umoja'
        },
        isActive: true,
        registered: new Date('05/03/2021 12:30:00'),
        hide: true
      }
    ]

    this.loaded = true;
    this.showExtended= true;
  }

  addUser(user: User){
    this.users.push(user)
  }

  // toggleUser(user: User){
  //   user.hide = !user.hide;
  // }

  onSubmit(e){
    console.log(123);

    e.preventDefault();
  }

  fireEvent(e){
    console.log(e.type);
    console.log(e.target.value)
  }

}
