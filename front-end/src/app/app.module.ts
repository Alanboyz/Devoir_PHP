import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './_pages/home/home.component';
import {HomeConnectComponent} from './_pages/home-connect/home-connect.component';
import {APP_BASE_HREF} from "@angular/common";
import {InscriptionModalComponent} from './_pages/home/inscription-modal/inscription-modal/inscription-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import { NotFoundComponent } from './_pages/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeConnectComponent,
    InscriptionModalComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [],
  providers: [],
  entryComponents: [
    InscriptionModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
