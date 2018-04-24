import { Component, Input, Output, EventEmitter, ElementRef, ViewChild,
        OnChanges, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import {UploadAvatarService} from '../upload-avatar.service';
import {UserService} from '../user.service';
declare var require: any;
const PhotoEditorSDK = require('../../PhotoEditorSDK/3.5.0/js/PhotoEditorSDK.js');
const PhotoEditorReactUI = require('../../PhotoEditorSDK/3.5.0/js/PhotoEditorReactUI.js');

@Component({
  selector: 'app-photo-editor',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './editor-image.component.html',
  styleUrls: [
    './editor-image.component.css'
  ],
})
export class EditorImageComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('host') host: any;
  el: ElementRef;
  editor: any;
  message: any;
  propagateChange = (_: any) => { };
  @Input() imageSrc: string;
  @Output() saveImageEvent: EventEmitter<Event> = new EventEmitter<any>();
  @Output() cancelEvent: EventEmitter<Event> = new EventEmitter<any>();

  constructor(el: ElementRef, private uploadService: UploadAvatarService, private userService: UserService) {
    this.el = el;
  }

  ngOnInit() {
    // this.createEditor();
  }

  ngOnDestroy() {
    if (this.editor) {
      this.editor.dispose();
    }
    this.userService.getUserCurrent();
  }

  ngOnChanges(changes: any) {
//        console.log(changes);
    if (this.editor) {
      this.editor.dispose();
    }
    this.createEditor();
    this.propagateChange(changes);
  }

  writeValue(value: any) {
    // console.log(value);
//        if (this.editor) {
//            if (value && value !== '') {

//            }
//        }
  }
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any) { }

  createEditor() {
    const myImage = new Image();
    myImage.crossOrigin = 'anonymous';
    // myImage.setAttribute('Access-Control-Allow-Headers', 'Content-Type');
    // myImage.setAttribute('Access-Control-Allow-Methods', 'GET');
    // myImage.setAttribute('Access-Control-Allow-Origin', '*');
    // console.log(myImage);
    myImage.addEventListener('load', () => {
      this.editor = new PhotoEditorSDK.UI.ReactUI({
        container: this.host.nativeElement,
        showNewButton: false,
        showCloseButton: false,
        editor: {
          image: myImage,
          controlsOrder: ['crop', ['filter', 'adjustments'], ['text', /*'sticker',*/ 'brush'], ['selectiveBlur', 'focus', 'border']],
          preferredRenderer: 'canvas', // canvas,webgl
          export: {
            showButton: false,
            download: false
          },
        },
        apiKey: 'softworldvn', // <-- Please replace this with your API key
        assets: {
          baseUrl: 'assets' // <-- This should be the absolute path to your `assets` directory
        },
        title: 'BNG Photo Editor',
        enableUpload: false,
        enableWebcam: false,
        showHeader: false
      });
    });
    myImage.src = this.imageSrc;
  }

  saveClick() {
    this.editor.export(false)
      .then(result => {
        // this.saveImageEvent.emit(result);
        // console.log(result.src);
        const token = this.userService.getToken();
        this.uploadService.upload({dataUrl: result.src, token: token }).subscribe(db => {
          this.message = db;
          localStorage.setItem('token', this.message.token);
          location.reload();
        });
      });
  }

  cancelClick() {
    this.cancelEvent.emit();
  }
}
