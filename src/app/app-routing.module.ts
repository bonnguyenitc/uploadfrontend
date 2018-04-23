import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DasdboardComponent} from './dasdboard/dasdboard.component';
import {UploadAvatarComponent} from './user/upload-avatar/upload-avatar.component';
import {UploadVideoComponent} from './user/upload-video/upload-video.component';
import {UploadImageComponent} from './user/upload-image/upload-image.component';
import {AuthGuardService} from './auth-guard.service';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DasdboardComponent, canActivate: [AuthGuardService]},
  {path: 'upload-avatar', component: UploadAvatarComponent, canActivate: [AuthGuardService]},
  {path: 'upload-video', component: UploadVideoComponent, canActivate: [AuthGuardService]},
  {path: 'upload-image', component: UploadImageComponent, canActivate: [AuthGuardService]},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
