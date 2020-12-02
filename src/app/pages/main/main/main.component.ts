import { Component, OnInit } from "@angular/core";
import {

  dataLabel,
  dataCard02,
  slider03Data,
  slider02Data,

  dataListSlide1_1,
  card10Data,
  direaction,
  serviceData,
} from "./mockData";
import { LabelOneModel } from "src/app/common-module/label-package/label-one/label-one.component";
import { of } from "rxjs";
import { CardOneModel } from "src/app/common-module/card-package/card-one/card-one.component";
import { CardTwoModel } from "src/app/common-module/card-package/card-two/card-two.component";
import { SlideThreeItemModel } from "src/app/common-module/slider-package/slide-three/components/slide-three-item/slide-three-item.component";
import { SlideOneItemModel } from "src/app/common-module/slider-package/slide-one/components/slide-one-item/slide-one-item.component";
import { SlideOneItemModule } from "src/app/common-module/slider-package/slide-one/components/slide-one-item/slide-one-item.module";
import { delay } from "rxjs/operators";
import { CourseService } from "src/app/core/services/landing-page-service/course.service";
import { HttpRequestModel } from "src/app/core/services/http-request-service/http-request.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {



  //slide01
  dataListSlide1: SlideOneItemModel[];
  // label01
  labels: LabelOneModel[] = [
    {
      icon: "../../../../assets/images/product.svg",
      unit: "Đơn hàng",
      number: 0,
    },
    {
      icon: "../../../../assets/images/membership.svg",
      unit: "Thành viên",
      number: 0,
    },
    {
      icon: "../../../../assets/images/clothing.svg",
      unit: "Sản phẩm",
      number: 0,
    },
  ];
  // slider04
  slider04: CardOneModel[];
  showControllDots = false;
  showControllArrows = true;
  gutter = 20;
  // card02
  dataCard02: CardTwoModel[];
  isShowAction = true;
  isImageBefore = true;
  //slide03
  slider03Data: SlideThreeItemModel[];
  //slide02
  slider02Data = slider02Data;

  //
  card10Data = card10Data;
  direaction = direaction;
  //
  serviceData;

  // service Type
  serviceTypes = ["course", "instructor", "class"];
  currentServiceIndex = -1;

  constructor(private landingPageService: CourseService) { }

  ngOnInit(): void {

    const dataGetCountMasterUser = new HttpRequestModel();
    this.landingPageService
      .countMasterUser(dataGetCountMasterUser)
      .subscribe((res) => {
        this.labels[0].number = res.count_course;
        this.labels[1].number = res.count_user;
        this.labels[2].number = res.count_intructor;
      });

    const dataGetMyList = new HttpRequestModel();
    dataGetMyList.params = {};
    this.landingPageService.getMyCourse(dataGetMyList).subscribe((res) => {
      console.log(res.data)
      this.slider04 = res.data.map((data) => new CardOneModel(data));
    });

    const dataGetBestCourse = new HttpRequestModel();
    dataGetBestCourse.params = { limit: 2 };
    this.landingPageService
      .getBestCourse(dataGetBestCourse)
      .subscribe((res) => {
        this.dataCard02 = res.list_best_course.map(
          (item) => new CardTwoModel(item)
        );
      });

    const dataGetInstructor = new HttpRequestModel();
    dataGetInstructor.params = { limit: 3 };
    this.landingPageService
      .getInstructor(dataGetInstructor)
      .subscribe((res) => {
        this.slider03Data = res.list_best_intructor.map(
          (data) => new SlideThreeItemModel(data)
        );
      });

    const dataGetPopularCourse = new HttpRequestModel();
    dataGetPopularCourse.params = {};
    this.landingPageService
      .getPopularCourse(dataGetPopularCourse)
      .subscribe((res) => {
        console.log(res)
        this.dataListSlide1 = res.data.map(
          (item) => new SlideOneItemModel(item)
        );
      });
  }

  menuClick($event) {
    console.log($event);
  }
  handle($event) {
    console.log($event);
  }
  handleSlider4($event) {
    console.log($event);
  }

}
