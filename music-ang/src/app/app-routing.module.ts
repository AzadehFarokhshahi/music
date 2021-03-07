import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './account/login.component';
import {RegisterComponent} from './account/register.component';
import {AdminComponent} from './admin/admin.component'
import {LessonsComponent} from './lessons/lessons.component';
import {Content2Component} from './content2/content2.component'

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'users', loadChildren: usersModule , canActivate: [AuthGuard]},
    { path: 'account', loadChildren: accountModule },
    { path: '',  component: DashboardComponent },
    { path: 'login',  component: LoginComponent }, 
    { path: 'register',  component: RegisterComponent }, 
    { path: 'admin' , component: AdminComponent, 
        canActivate: [AuthGuard],   
    } ,
    { path: 'lessons' , component: LessonsComponent}, 
    { path: 'content2' , component: Content2Component}, 

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }