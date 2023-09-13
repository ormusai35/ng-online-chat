import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MembersComponent } from './components/members/members.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ChatAppComponent } from './components/chat-app/chat-app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsFilterComponent } from './components/contacts-filter/contacts-filter.component';
import { MessageComponent } from './components/message/message.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { OptionsComponent } from './components/options/options.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatsFilterComponent } from './components/chats-filter/chats-filter.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    MembersComponent,
    MessagesComponent,
    ChatAppComponent,
    AddContactComponent,
    ContactComponent,
    ContactsFilterComponent,
    MessageComponent,
    TextBoxComponent,
    HeaderComponent,
    CustomDatePipe,
    OptionsComponent,
    ContactsComponent,
    ChatsComponent,
    ChatComponent,
    ChatsFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
