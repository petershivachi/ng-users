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
  loaded: boolean = false

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
        }
      },
      {
        firstName: 'Jill',
        lastName: 'Robbinson',
        age: 22,
        address: {
          street: '55 Ladhies Road',
          city: 'Nairobi',
          estate: 'Makadara'
        }
      },
      {
        firstName: 'Jack',
        lastName: 'Jason',
        age: 44,
        address: {
          street: '48 Ring Road',
          city: 'Nairobi',
          estate: 'South B'
        }
      },
      {
        firstName: 'Steve',
        lastName: 'Smith',
        age: 25,
        address: {
          street: '55 Enterprise Road',
          city: 'Nairobi',
          estate: 'Industrial Area'
        }
      },
      {
        firstName: 'Mark',
        lastName: 'Brad',
        age: 28,
        address: {
          street: '18 Main Street',
          city: 'Nairobi',
          estate: 'Umoja'
        }
      }
    ]

    this.loaded = true;
    this.showExtended= true;
  }

}
