import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Pet} from "./pet.model";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private petsResourcePath = `${environment.backendUrl}/pets`;

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsResourcePath)
      .pipe(map(response => response.sort((a: Pet, b: Pet) => a.name.localeCompare(b.name))));
  }

  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.petsResourcePath, pet);
  }
}
