import { Component } from '@angular/core';
import { CitiboxService } from './citibox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CitiboxService]
})
export class AppComponent {
  title = 'app';
}
