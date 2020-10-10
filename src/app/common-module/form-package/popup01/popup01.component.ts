import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { FormComponent } from "./form/form.component";

@Component({
  selector: "app-popup01",
  templateUrl: "./popup01.component.html",
  styleUrls: ["./popup01.component.scss"],
})
export class Popup01Component implements OnInit {
  checkis = false;
  @Output() isLog = new EventEmitter<boolean>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { data: this.checkis }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.checkis = result;
      this.isLog.emit(this.checkis)
    });
  }

}
