import { Component,Input } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
  providers: [ContactService]
})
export class AddContactComponent {
  constructor(private contactService: ContactService){}

  onCreateContact(firstName: string, lastName: string, phoneNumber: string, email: string){
    this.contactService.addContact(firstName, lastName, phoneNumber, email)
  }
}
