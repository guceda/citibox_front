import { Component, OnInit } from '@angular/core';
import { CitiboxService } from '../citibox.service';
import { PersistenceService, StorageType } from 'angular-persistence';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css'],
  providers: [CitiboxService, PersistenceService]
})
export class FourComponent implements OnInit {

  id = ''
  data: any


  constructor(private citiboxService:CitiboxService, private persistenceService: PersistenceService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id
      console.log(params.id)
    })
    this.data = this.persistenceService.get('listaDatos', StorageType.LOCAL)
  }

  ngOnInit() {
    
    this.citiboxService.getAllData(this.id).then((res)=>{
      let dataRes = res.json()
      console.log(dataRes)
      this.persistenceService.set('listaDatos', dataRes, {type: StorageType.LOCAL})

      if(dataRes.error) {
        this.router.navigate(['/orden', this.id, 'contacto'])
      }
    })
  
  }
}
