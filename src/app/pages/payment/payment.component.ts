import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidator } from 'src/app/common-module/form-package/popup01/custom-validator';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  InfoForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.InfoForm = new FormGroup({
      name: new FormControl("", [
        CustomValidator.required,
        CustomValidator.maxLength(36)
      ]),
      phone: new FormControl(""),
      email: new FormControl(""),
      province: new FormControl(""),
      district: new FormControl(""),
      ward: new FormControl(""),
      address: new FormControl("")

    });
  }

}
