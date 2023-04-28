import { Component,Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input()
 index: number = -1;
 contact?:Contact;

  constructor(private contactService: ContactService
    ){}


  deleteContact(): void{
    this.contactService.deleteContact(this.index);
  }

  ngOnInit(){
    this.contact = this.contactService.contacts[this.index];
  }
  
}