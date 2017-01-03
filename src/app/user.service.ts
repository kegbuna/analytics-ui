import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import {IUserModel} from 'models';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUser(): Observable<IUserModel> {
    return this.http
      .get('http://local.adminanalytics.spscommerce.com/')
      .map((res: Response) => res.json() as IUserModel);
  }
}
