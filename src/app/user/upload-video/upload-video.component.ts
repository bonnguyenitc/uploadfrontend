import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/api';
import {UserService} from '../../user.service';
@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

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
