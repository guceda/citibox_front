import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersistenceService, StorageType } from 'angular-persistence';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nine',
  templateUrl: './nine.component.html',
  styleUrls: ['./nine.component.css'],
  providers: [PersistenceService]
})

export class NineComponent implements OnInit {

  form: FormGroup
  error: boolean
  parpadeo: boolean
  interval
  data: any

  constructor(private persistenceService: PersistenceService, private router: Router) { 
    this.error = false
    this.parpadeo = false
    this.data = this.persistenceService.get('listaDatos', StorageType.LOCAL)
  }

  ngOnInit() {
    this.form = new FormGroup({
      letra: new FormControl('', [
        Validators.required,
        Validators.maxLength(1),
        Validators.minLength(1),
        Validators.pattern("[a-zA-Z]"),
      ])
    })

    this.interval = setInterval(() => {
      if(this.parpadeo === false) {
        this.parpadeo = true
      } else if (this.parpadeo === true) {
        this.parpadeo = false
      } 
    }, 500)

    
  }

  handleSubmit(pInput) {
    let letra = this.data.letra.toLowerCase()
    if(pInput.letra === letra) {
      this.router.navigate(['/orden', this.data.codigoTrans, 'eleven'])
      clearInterval(this.interval)
    } else {
      clearInterval(this.interval)
      this.error = true
      this.parpadeo = false
      this.form.controls.letra.setValue('')
    }
  }
}


