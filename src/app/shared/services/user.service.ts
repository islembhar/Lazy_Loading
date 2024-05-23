import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users=[] as User[];

  constructor() {
    this.users=JSON.parse(localStorage.getItem('users')|| '');
   }

   addUser(user:User)
   {
    this.users.push(user);
    localStorage.setItem('users',JSON.stringify(this.users));
   }
   updateUser(user:User, index:number)
   {
    let users=this.getUsers();
    users[index]=user;  
    localStorage.setItem('users',JSON.stringify(users));

   }
   getUsers()
   {
    return JSON.parse(localStorage.getItem('users')|| '');
   }
   authenticate(email:string, password:string)
   {
    let users=this.getUsers();
    // return users.some((u:User)=>u.email===email && u.mdp===password);

    let i= users.finfIndex((u:User)=>u.email===email && u.mdp===password);
    return users[i];
   }

   deleteUser(userIndex:number)
   {
    let users=this.getUsers();
    users.splice(userIndex,1);
    localStorage.setItem('users',JSON.stringify(users));
   }

   filterUsers(searchTerm:string)
   {
    let users=this.getUsers();
    return users.filter(
      (u:User)=>
        u.nom.toLowerCase().includes(searchTerm.toLowerCase())
      ||
      u.prenom.toLowerCase().toLowerCase().includes(searchTerm.toLowerCase())
      ||
      u.email.toLowerCase().toLowerCase().includes(searchTerm.toLowerCase())
    )
   }
}
