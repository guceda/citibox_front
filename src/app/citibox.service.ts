import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CitiboxService {

  constructor(private http:Http ) { }

  getAllData(){
   return this.http.get('http://0583c8db.ngrok.io/api/datosAcceso').toPromise()
  }
 


}
