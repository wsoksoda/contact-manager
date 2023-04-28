import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  {path: 'contact-details/:id', component: ContactDetailsComponent},
  {path: 'contact-list', component: ContactListComponent},
  {path: 'add-contact', component: AddContactComponent},
  {path: 'edit-contact', component: ContactDetailsComponent},
  {path: '',redirectTo: '/contact-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
