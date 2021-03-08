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
  enableAddUser: boolean = true;
  currentClassses = {}

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
        image: 'http://lorempixel.com/400/400/people/1',
        isActive: true
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
        image: 'http://lorempixel.com/400/400/people/2',
        isActive: false
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
        image: 'http://lorempixel.com/400/400/people/3',
        isActive: true
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
        image: 'http://lorempixel.com/400/400/people/4',
        isActive: false
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
        image: 'http://lorempixel.com/400/400/people/5',
        isActive: true
      }
    ]

    this.loaded = true;
    this.showExtended= true;

    this.setCurrentClass()
  }

  setCurrentClass(){
    this.currentClassses = {
      'btn-success': this.enableAddUser,
      'big-text': this.showExtended
    }
  }

}
