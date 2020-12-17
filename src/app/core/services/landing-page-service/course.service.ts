import {
  HttpRequestService,
  HttpRequestModel,
} from "../http-request-service/http-request.service";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import {
  dataLabel,
  dataCard02,
  slider03Data,
  serviceData,
  dataListSlide1_1,
} from "./../../../pages/main/main/mockData";
import { delay } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class CourseService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpRequestService) { }

  getPopularCourse(data: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/get-product-random`;
    const params = data.params;
    const body = data.body;
    const headers = data.headers;

    return this.http.get(apiUrl, params, body, headers);
    // return of(dataListSlide1_1);

  }
  countMasterUser(data: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}master/countUser`;
    const params = data.params;
    const body = data.body;
    const headers = data.headers;

    // return this.http.get(apiUrl, params, body, headers);
    return of(dataLabel);
  }
  getMyCourse(data: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/get-product-discount`;
    const params = data.params;
    const body = data.body;
    const headers = data.headers;

    return this.http.get(apiUrl, params, body, headers);
    // return of(dataList).pipe(delay(1000));
  }
  getBestCourse(data: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/get-product-hot`;
    const params = data.params;
    const body = data.body;
    const headers = data.headers;

    return this.http.get(apiUrl, params, body, headers);
    // return of(dataCard02);
  }
  getCourseAndInstructor(data: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}course/courseAndInstructor`;
    const params = data.params;
    const body = data.body;
    const headers = data.headers;

    // return this.http.get(apiUrl, params, body, headers);
    return of(serviceData);
  }
  getInstructor(data: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}instructor/bestIntructor`;
    const params = data.params;
    const body = data.body;
    const headers = data.headers;

    // return this.http.get(apiUrl, params, body, headers);
    return of(slider03Data);
  }
}
