import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CfsModule } from './cfs/cfs.module';

//import { CfListComponent } from './cf-list/cf-list.component';
//import { CfDetailsComponent } from './cf-details/cf-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ExpenseCenterModule }      from './expense-center/expense-center.module';


@NgModule({
  declarations: [
    AppComponent,
    //CfListComponent,
    //CfDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CfsModule,
    ExpenseCenterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
