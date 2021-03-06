import { DeviceFormComponent } from './device-form/device-form.component';
import { DeviceManagerComponent } from './device-manager/device-manager.component';
import { ReporterrorComponent } from './reporterror/reporterror.component';
import { LoginComponent } from './login/login.component';
import {NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import {ChannelFormComponent} from './channel-form/channel-form.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './../app/manager/manager.component';



const routes = [
    {path: '', component: HomeComponent },
    {path: 'reporterror', component: ReporterrorComponent },
    {path: 'manager', component: ManagerComponent, children: [
      {path: 'form', component: ChannelFormComponent }
    ] },
    {path: 'device-manager', component: DeviceManagerComponent, children: [
      {path: 'device-form', component: DeviceFormComponent}
    ]},
    {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
