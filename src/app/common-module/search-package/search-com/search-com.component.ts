import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-search-com',
  templateUrl: './search-com.component.html',
  styleUrls: ['./search-com.component.scss']
})
export class SearchComComponent implements OnInit {
  result = '';
  constructor(public dialogRef: MatDialogRef<SearchComComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onEnter() {
    this.dialogRef.close(this.data.textSearch);
  }
  handleDelete() {
    this.data.textSearch = "";
  }

}
