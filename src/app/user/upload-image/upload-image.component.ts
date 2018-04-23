import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/api';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  msgS: Message[];

  uploadedFiles: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.msgS = [];
    this.msgS.push({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    console.log(this.msgS);
  }

  onBeforeSend(event) {
    event.xhr.setRequestHeader('Authorization', 'Bearer ' + this.userService.getToken());
  }

}
