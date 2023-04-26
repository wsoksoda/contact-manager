import { Component,Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent {
@Input() contact: {firstName: string; lastName: string, phoneNumber: string; email: string};
@Input() id: number;

  constructor(private contactService: ContactService
    ){}


  deleteContact(): void{
    this.contactService.deleteContact(this.id);
  }

  
}