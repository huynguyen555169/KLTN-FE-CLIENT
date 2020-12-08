import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-c-discussion-attach',
  templateUrl: './c-discussion-attach.component.html',
  styleUrls: ['./c-discussion-attach.component.scss']
})
export class CDiscussionAttachComponent implements OnInit {
  files: any;
  url: any;

  @Input() avatar: any;
  @Output() filesAttach = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.url = this.avatar
  }


  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.files = event.target.result
      this.filesAttach.emit(this.files);
      this.url = event.target.result;
    }
  }



  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.url.splice(index, 1)
    this.files.splice(index, 1);
    this.filesAttach.emit(this.files);
  }

  /**
   * Simulate the upload process
   */


  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
