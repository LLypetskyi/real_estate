import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HousingService } from '../services/housing.service';
import { HousingLocation } from '../interfaces/housinglocation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  housingLocation: HousingLocation | undefined;
  housingLocationId = -1;

  constructor(private route: ActivatedRoute,
    private housingService: HousingService) {

    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);

  }
}
