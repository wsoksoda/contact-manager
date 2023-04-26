import { Component,Input, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactComponent } from '../contact/contact.component';
import { AppComponent } from '../app.component';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {

  contact : Contact[] =  [];

  constructor(private contactService: ContactService){}


  ngOnInit(){
    this.contact = this.contactService.contacts;
  }
  
onAccountAdded(newAccount: {firstName:string, lastName: string, phoneNumber: string, email: string}){
  
}

}
