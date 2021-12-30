import {Component, OnDestroy, OnInit} from '@angular/core';
import {PetService} from "../data-access/pet.service";
import {SortOrder} from "../util-sort-by/sort-order.enum";
import {FormControl} from "@angular/forms";
import {combineLatest, filter, map, Observable, startWith} from "rxjs";
import {Pet} from "../data-access/pet.model";

@Component({
  selector: 'app-feat-pet-overview',
  templateUrl: './feat-pet-overview.component.html',
  styleUrls: ['./feat-pet-overview.component.scss']
})
export class FeatPetOverviewComponent {

  sortOrder =  SortOrder.DESC;
  nameFilter = new FormControl('');

  pets$: Observable<Pet[]> = combineLatest([this.petService.getPets(), this.nameFilter.valueChanges.pipe(startWith(''))])
    .pipe(map(([pets, filter]) => pets.filter((pet) => pet.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1)))

  constructor(private petService: PetService) { }

}
