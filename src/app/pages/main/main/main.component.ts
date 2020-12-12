import { Component, OnInit } from "@angular/core";
import {
  slider02Data,
  card10Data,
  direaction,
} from "./mockData";
import { CardOneModel } from "src/app/common-module/card-package/card-one/card-one.component";
import { CardTwoModel } from "src/app/common-module/card-package/card-two/card-two.component";
import { SlideThreeItemModel } from "src/app/common-module/slider-package/slide-three/components/slide-three-item/slide-three-item.component";
import { SlideOneItemModel } from "src/app/common-module/slider-package/slide-one/components/slide-one-item/slide-one-item.component";
import { CourseService } from "src/app/core/services/landing-page-service/course.service";
import { HttpRequestModel } from "src/app/core/services/http-request-service/http-request.service";
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {



  //slide01
  dataListSlide1: SlideOneItemModel[];

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

  constructor(private router: Router, private landingPageService: CourseService, private spinner: CSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    const dataGetMyList = new HttpRequestModel();
    dataGetMyList.params = {};
    this.landingPageService.getMyCourse(dataGetMyList).subscribe((res) => {
      this.spinner.hide()
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
        this.dataListSlide1 = res.data.map(
          (item) => new SlideOneItemModel(item)
        );
      });
  }

  menuClick($event) {
  }
  handle(e) {
    this.router.navigate([e.link]);
    console.log(e.link)
  }
  handleSlider4($event) {
  }

}
