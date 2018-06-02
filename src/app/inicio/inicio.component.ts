import { Component, OnInit } from '@angular/core';
import { CitiboxService } from '../citibox.service';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [CitiboxService, PersistenceService]
})
export class InicioComponent implements OnInit {



  constructor(private citiboxService:CitiboxService, private persistenceService: PersistenceService) { 
  }

  ngOnInit() {
    this.citiboxService.getAllData().then((res)=>{
      //this.persistenceService.set('listaDatos', res.json(), {type: StorageType.LOCAL})
      console.log(this.persistenceService.get('listaDatos', StorageType.LOCAL ))

    })
  }


}
