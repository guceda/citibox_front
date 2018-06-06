import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
  selector: 'app-twelve',
  templateUrl: './twelve.component.html',
  styleUrls: ['./twelve.component.css'],
  providers: [PersistenceService]
})
export class TwelveComponent implements OnInit {
  data: any

  constructor(private persistenceService: PersistenceService) { 
    this.data = this.persistenceService.get('listaDatos', StorageType.LOCAL)
  }

  ngOnInit() {
  }

}
