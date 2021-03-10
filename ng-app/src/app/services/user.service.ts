import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]

  constructor() {
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
   }

   getUsers(){
     return this.users;
   }

   addUser(user: User){
     this.users.unshift(user);
   }
}
