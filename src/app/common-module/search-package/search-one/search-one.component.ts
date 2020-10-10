import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SearchComComponent } from '../search-com/search-com.component';

@Component({
  selector: 'app-search-one',
  templateUrl: './search-one.component.html',
  styleUrls: ['./search-one.component.scss']
})
export class SearchOneComponent implements OnInit {

  textSearch: any = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SearchComComponent, {
      width: '50%',
      height: '400px',
      data: { textSearch: this.textSearch },
      position: {
        top: '90px',
        right: '0px',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.textSearch = result;
      console.log(this.textSearch)
    });

  }

}
