import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';

import { FormComponent } from "./form/form.component";

@Component({
  selector: "app-popup01",
  templateUrl: "./popup01.component.html",
  styleUrls: ["./popup01.component.scss"],
})
export class Popup01Component implements OnInit {
  constructor(public dialog: MatDialog, private spinner: CSpinnerService) { }

  ngOnInit(): void { }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent);
  }

}
