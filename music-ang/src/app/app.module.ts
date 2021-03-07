import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';;
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';;
import { AdminComponent } from './admin/admin.component';
import { LessonsComponent } from './lessons/lessons.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import {SidebarAccordionModule} from 'ng-sidebar-accordion';;
import { Content2Component } from './content2/content2.component';




@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        SidebarModule,
        SidebarAccordionModule
       
    ],
    exports: [NavbarComponent],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        DashboardComponent ,
        NavbarComponent
,
        AdminComponent ,
        LessonsComponent ,
        SidebarComponent ,
        Content2Component,
        
           
         ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };