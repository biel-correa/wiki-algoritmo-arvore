import { Component } from '@angular/core';
import {ALGORITHMS} from "@app/models/algorithms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  algorithms = ALGORITHMS;
}
