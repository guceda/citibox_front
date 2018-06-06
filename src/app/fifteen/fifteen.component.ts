import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
  selector: 'app-fifteen',
  templateUrl: './fifteen.component.html',
  styleUrls: ['./fifteen.component.css'],
  providers: [PersistenceService]
})
export class FifteenComponent implements OnInit {

  data: any
  cod1: string
  cod2: string
  codFinal: string

  constructor(private persistenceService: PersistenceService) { 
    this.data = this.persistenceService.get('listaDatos', StorageType.LOCAL)
    this.cod1 = this.data.codigoRes.slice(0, 4)
    this.cod2 = this.data.codigoRes.slice(4, 8)
    this.codFinal = this.cod1 + ' ' + this.cod2
  }

  ngOnInit() {
    
  }
  

  
}
