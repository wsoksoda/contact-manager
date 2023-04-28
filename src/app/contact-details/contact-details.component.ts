import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
  providers: [ContactService]
})
export class ContactDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    // private location: Location
  ) { }

  contact?: Contact;

  id: number = -1;


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('index'));
    this.getContact();
  }

  getContact(){
     var oldContact = this.contactService.contacts[this.id];
    this.contact = {
      firstName: oldContact.firstName,
      lastName: oldContact.lastName,
      phoneNumber: oldContact.phoneNumber,
      email:oldContact.email
    }
  }

 

  editContact(){
    this.contactService.updateContact(this.id, this.contact!);
  }
}
