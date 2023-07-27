import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MembersComponent } from './components/members/members.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ChatAppComponent } from './components/chat-app/chat-app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsFilterComponent } from './components/contacts-filter/contacts-filter.component';
import { MessageComponent } from './components/message/message.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    MembersComponent,
    MessagesComponent,
    ChatAppComponent,
    AddContactComponent,
    ContactComponent,
    ContactsFilterComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
