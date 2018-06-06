import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
  selector: 'app-eleven',
  templateUrl: './eleven.component.html',
  styleUrls: ['./eleven.component.css'],
  providers: [PersistenceService]
})
export class ElevenComponent implements OnInit {

  data: any

  constructor(private persistenceService: PersistenceService) { 
    this.data = this.persistenceService.get('listaDatos', StorageType.LOCAL)
  }

  ngOnInit() {
    
  }

}
