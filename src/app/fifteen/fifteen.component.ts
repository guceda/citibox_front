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

  constructor(private persistenceService: PersistenceService) { 
    this.data = this.persistenceService.get('listaDatos', StorageType.LOCAL)
  }

  ngOnInit() {
    
  }

}
