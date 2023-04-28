import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent implements OnInit{
  title = 'contacts';
  constructor(private contactService: ContactService){}

  contact : Contact[] =  [];

  ngOnInit(){
    this.contact = this.contactService.contacts;
  }
}
    


  

