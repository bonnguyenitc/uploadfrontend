import { Component, OnInit, ViewChild } from '@angular/core';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';
import {UploadAvatarService} from '../../upload-avatar.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-upload-avatar',
  templateUrl: './upload-avatar.component.html',
  styleUrls: ['./upload-avatar.component.css']
})
export class UploadAvatarComponent implements OnInit {

  name: string;
  data1: any;
  cropperSettings1: CropperSettings;
  croppedWidth: number;
  croppedHeight: number;
  message: any;
  isShowS: Boolean = false;
  isShowR: Boolean = false;

  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

  constructor(private uploadService: UploadAvatarService, private  userService: UserService) {
    this.name = 'Angular2';
    this.cropperSettings1 = new CropperSettings();
    this.cropperSettings1.width = 200;
    this.cropperSettings1.height = 200;

    this.cropperSettings1.croppedWidth = 200;
    this.cropperSettings1.croppedHeight = 200;

    this.cropperSettings1.canvasWidth = 500;
    this.cropperSettings1.canvasHeight = 300;

    this.cropperSettings1.minWidth = 10;
    this.cropperSettings1.minHeight = 10;

    this.cropperSettings1.rounded = false;
    this.cropperSettings1.keepAspect = false;

    this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

    this.data1 = {};
  }

  cropped(bounds: Bounds) {
    this.croppedHeight = bounds.bottom - bounds.top;
    this.croppedWidth = bounds.right - bounds.left;
  }

  upload(dataUrl) {
    let token = this.userService.getToken();
    this.uploadService.upload({dataUrl: dataUrl, token: token }).subscribe(db => {
        this.message = db;
        if (this.message.result === 'OK') {
          // console.log(this.message.token);
          localStorage.setItem('token', this.message.token);
          return this.isShowS = true; }
        return this.isShowR = true;
    });
  }


  ngOnInit() {
  }

}
