import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../interfaces/housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss']
})
export class HousingLocationComponent implements OnInit {

  @Input() housingLocation!: HousingLocation;

  constructor() { }

  ngOnInit(): void {
  }
}
