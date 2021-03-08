import { Component, OnInit } from '@angular/core';
import User from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAddUser: boolean = false;

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
        image: 'http://lorempixel.com/200/200/people/1'
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
        image: 'http://lorempixel.com/200/200/people/2'
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
        image: 'http://lorempixel.com/200/200/people/3'
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
        image: 'http://lorempixel.com/200/200/people/4'
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
        image: 'http://lorempixel.com/200/200/people/5'
      }
    ]

    this.loaded = true;
    this.showExtended= true;
  }

}
