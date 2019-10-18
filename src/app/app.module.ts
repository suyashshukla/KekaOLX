import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClassifiedsComponent } from './classifieds/classifieds.component';
import { MyClassifiedsComponent } from './my-classifieds/my-classifieds.component';
import { InboxComponent } from './inbox/inbox.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassifiedsComponent,
    MyClassifiedsComponent,
    InboxComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
