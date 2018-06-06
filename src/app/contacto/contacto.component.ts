import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

	id: any

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
	this.activatedRoute.params.subscribe((params) => {
      this.id = params.id
    })
  }

  ngOnInit() {
	  
  }

	handleClick() {
		this.router.navigate(['/orden', this.id, 'twob'])
	}

}
