import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SearchComComponent } from '../search-com/search-com.component';

@Component({
  selector: 'app-search-one',
  templateUrl: './search-one.component.html',
  styleUrls: ['./search-one.component.scss']
})
export class SearchOneComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SearchComComponent, {
      width: '50%',
      height: '400px',
      position: {
        top: '90px',
        right: '0px',
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });

  }

}
