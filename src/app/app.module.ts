import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const config = {
  apiKey: "AIzaSyD06ZMAY6eHwuI73RjBvCZ8Jedec7tyYzQ",
  authDomain: "astronushub-1a488.firebaseapp.com",
  databaseURL: "https://astronushub-1a488.firebaseio.com",
  projectId: "astronushub-1a488",
  storageBucket: "astronushub-1a488.appspot.com",
  messagingSenderId: "307436214172",
};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
