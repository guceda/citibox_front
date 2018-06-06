import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
  selector: 'app-thirteen',
  templateUrl: './thirteen.component.html',
  styleUrls: ['./thirteen.component.css'],
  providers: [PersistenceService]
})
export class ThirteenComponent implements OnInit {

  data: any

  constructor(private persistenceService: PersistenceService) { 
    this.data = this.persistenceService.get('listaDatos', StorageType.LOCAL)
  }

  ngOnInit() {
    
  }

}
