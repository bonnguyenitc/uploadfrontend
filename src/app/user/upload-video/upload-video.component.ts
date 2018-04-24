import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Message} from '../../../../primeng/api';
import {UserService} from '../../user.service';
@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {
  @ViewChild('pfuReference') input: ElementRef;
  msgS: Message[];
  ip ;

  uploadedFiles: any[] = [];
  constructor(private userService: UserService) {
  }

  ngOnInit() {}



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

   onFileSelect(event, pfuReference) {
    for (let i = 0, len = event.files.length; i < len; i++) {
      const file = event.files[i];
      const fileReader = new FileReader();
      fileReader.onload = function() {
        const blob = new Blob([fileReader.result], {type: file.type});
        const url = URL.createObjectURL(blob);
        const video = document.createElement('video');
        const timeupdate = function() {
          if (snapImage()) {
            video.removeEventListener('timeupdate', timeupdate);
            video.pause();
          }
        };
        video.addEventListener('loadeddata', function() {
          if (snapImage()) {
            video.removeEventListener('timeupdate', timeupdate);
          }
        });
        const snapImage = function() {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
          const image = canvas.toDataURL();
          const success = image.length > 100000;
          if (success) {
            const img = document.createElement('img');
            img.src = image;
            document.getElementById('thumb-' + i).appendChild(img);
            URL.revokeObjectURL(url);
          }
          return success;
        };
        video.addEventListener('timeupdate', timeupdate);
        video.preload = 'metadata';
        video.src = url;
        // Load video in Safari / IE11
        video.muted = true;
        // video.playsInline = true;
        video.play();
      };
      fileReader.readAsArrayBuffer(file);
    }
  }
}
