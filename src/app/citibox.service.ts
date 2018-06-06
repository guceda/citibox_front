import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CitiboxService {

  constructor(private http:Http ) { }

  getAllData(pId){
   return this.http.get(`https://escandallos.herokuapp.com/api/orden/${pId}`).toPromise()
  }
 

  
}
