import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CitiboxService {

  constructor(private http:Http ) { }

  getAllData(){
   return this.http.get('http://localhost:3000/api/datosAcceso').toPromise()
  }
 


}
