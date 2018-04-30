import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Tech } from './apidata';
import { TECHNOLOGY } from './mock-data';

@Injectable()
export class CommonService {

  constructor() { }
  
  // getTechList(): Tech[] {
  //   return TECHNOLOGY;
  // }
  getTechList(): Observable<Tech[]> {
    return of(TECHNOLOGY);
  }
}
