import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartRootService {

  constructor() { }
  public isLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public countChange: BehaviorSubject<number> = new BehaviorSubject(0);
  public listCartChange: BehaviorSubject<any> = new BehaviorSubject([]);
  public rateChange: BehaviorSubject<number> = new BehaviorSubject(5);
  public listOrder: BehaviorSubject<any> = new BehaviorSubject([]);

}
