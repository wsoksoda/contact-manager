import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

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
    private location: Location
  ){}




ngOnInit(): void{
  this.getContact()
}

getContact(): void{
  const id = Number(this.route.snapshot.paramMap.get('firstName'));
 // this.contactService.getContact(firstName)
}


editContact(firstName: string, lastName: string , phoneNumber: string, email: string): void {
  // if (this.contacts){
  //   this.contactService.editContact(this.contactd)
  // }
}
}
