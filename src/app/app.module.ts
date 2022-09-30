import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ThingListComponent } from './thing-list/thing-list.component';
import { OtherComponent } from './other/other.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThingComponent } from './thing/thing.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ThingListComponent,
    OtherComponent,
    ThingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
