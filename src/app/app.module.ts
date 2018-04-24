import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ng2-img-cropper';
import { FileUploadModule } from '../../primeng/fileupload';
import { GrowlModule } from '../../primeng/growl';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

// material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { DasdboardComponent } from './dasdboard/dasdboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UploadAvatarComponent } from './user/upload-avatar/upload-avatar.component';
import { UploadVideoComponent } from './user/upload-video/upload-video.component';
import { UploadImageComponent } from './user/upload-image/upload-image.component';
import {MatIconModule} from '@angular/material/icon';

// service
import { UploadAvatarService } from './upload-avatar.service';
import {UserService} from './user.service';
import {AuthGuardService} from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DasdboardComponent,
    ProfileComponent,
    UploadAvatarComponent,
    UploadVideoComponent,
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ImageCropperModule,
    FileUploadModule,
    GrowlModule,
    MatIconModule
  ],
  providers: [UploadAvatarService, UserService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
