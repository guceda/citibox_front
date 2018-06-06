import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
  selector: 'app-fourteen',
  templateUrl: './fourteen.component.html',
  styleUrls: ['./fourteen.component.css'],
  providers: [PersistenceService]
})
export class FourteenComponent implements OnInit {
  data: any

  constructor(private persistenceService: PersistenceService) { 
    this.data = this.persistenceService.get('listaDatos', StorageType.LOCAL)
  }

  ngOnInit() {
  }

}
