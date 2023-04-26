import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  contacts = [
    {
      firstName: 'William',
      lastName: 'Soksoda',
      phoneNumber: '123-456-7890',
      email:'william.soksoda@ndsu.edu'
    },
    {
      firstName: 'Mario',
      lastName: 'Mario',
      phoneNumber: '929-556-2746',
      email:'supermariobros@plumbing.com'
    },
  ];

  constructor() { }

  

  addContact(firstName: string, lastName:string, phoneNumber: string, email: string): void{
     this.contacts.push({firstName,lastName,phoneNumber,email});
     
  };

  editContact(contact: {firstName: string; lastName: string ; phoneNumber: string; email: string}){

  }

  deleteContact(id: number) {
    this.contacts.splice(id, 1);
  }
}
