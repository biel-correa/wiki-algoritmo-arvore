import {Component, Input} from '@angular/core';
import AlgorithmModel from "@app/models/algorithm.model";

@Component({
  selector: 'app-algorithm-card',
  templateUrl: './algorithm-card.component.html',
  styleUrls: ['./algorithm-card.component.scss']
})
export class AlgorithmCardComponent {
  @Input() algorithm: AlgorithmModel;
}
