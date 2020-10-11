import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ProductModel {
  product_id: number;
  product_name: string;
  product_image1: string;
  product_image2: string;
  product_type_fk: number;
  product_size_fk: number;
  product_unit_price: number;
  product_paid_price: number;
  product_discount: number;
  product_desciption: string;
  product_qty: number;


}
/** Constants used to fill up our data base. */


@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.scss']
})

export class TableOneComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: any;
  displayedColumns: string[] = ['product_id', 'product_image', 'product_name', 'product_unit_price', 'product_qty', 'action'];
  dataSource: MatTableDataSource<ProductModel>;

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
  handleDelete(e) {
    console.log(e)
  }
}
