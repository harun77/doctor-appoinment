import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppoinmentComponent } from './components/appoinment/appoinment.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CreateAppoinmentComponent } from './components/dialogs/create-appoinment/create-appoinment.component';
import { OpenAppoinmentComponent } from './components/dialogs/open-appoinment/open-appoinment.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CreateAppoinmentComponent,
    OpenAppoinmentComponent,
    AppoinmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
