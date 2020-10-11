import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
/** Constants used to fill up our data base. */


@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.scss']
})

export class TableOneComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: any;
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.data);

  }
  ngOnInit(): void {

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
