import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/api/search/search.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';


@Component({
  selector: 'app-search-com',
  templateUrl: './search-com.component.html',
  styleUrls: ['./search-com.component.scss']
})
export class SearchComComponent implements OnInit {
  result = '';
  dataList: any;
  constructor(private router: Router, public dialogRef: MatDialogRef<SearchComComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private searchService: SearchService) {
  }

  ngOnInit(): void {
  }
  onEnter() {
    const searchListProduct = new HttpRequestModel();
    searchListProduct.params = { search: this.result };
    this.searchService.getListSearch(searchListProduct).subscribe((res) => {
      this.dataList = res.data;
    })
    this.dialogRef.disableClose = true;
    // this.dialogRef.close(this.data.textSearch)
  }
  handleDelete() {
    this.result = "";
  }
  handleSearchClick(e) {
    this.dialogRef.close()
    let nameInRoute: String = e.product_name.split(' ').join('-');
    this.router.navigate(['detail-product', nameInRoute])

  }

}
