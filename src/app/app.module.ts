import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FriendComponent } from './components/friend/friend.component';
import { FriendEditionComponent } from './components/friend-edition/friend-edition.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { HomeComponent } from './container/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatStringPipe } from './shared/pipes/format-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    FriendComponent,
    FriendEditionComponent,
    FriendListComponent,
    HomeComponent,
    FormatStringPipe
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
