import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editor-dialog',
  templateUrl: './editor-dialog.component.html',
  styleUrls: ['./editor-dialog.component.css']
})
export class EditorDialogComponent implements OnInit {
  url: string;
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    console.log(data.url);
    this.url = data.url;
  }

  ngOnInit() {
  }

}
