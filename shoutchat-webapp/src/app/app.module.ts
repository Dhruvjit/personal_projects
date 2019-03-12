import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesListComponent } from './names-list/names-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PrivateChatWindowComponent } from './private-chat-window/private-chat-window.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule} from '@angular/material';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesListComponent,
    ChatWindowComponent,
    HeaderComponent,
    FooterComponent,
    PrivateChatWindowComponent,
    MessageListComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule, 
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }