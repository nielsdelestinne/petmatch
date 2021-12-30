import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime, filter, first, Observable, Subscription} from "rxjs";
import {PetService} from "../data-access/pet.service";
import {Pet} from "../data-access/pet.model";
import {AlertMessageService} from "../ui-layout/alert-message/alert-message.service";
import {AlertMessageType} from "../ui-layout/alert-message/alter-message.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-feat-pet-create',
  templateUrl: './feat-pet-create.component.html',
  styleUrls: ['./feat-pet-create.component.scss']
})
export class FeatPetCreateComponent implements OnInit, OnDestroy {

  private imageFormControl$!: Subscription;

  createPetForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    kind: ['', Validators.required],
    image: ['', [Validators.required, Validators.pattern('^images\/[a-zA-Z0-9\-]*\.(jpg|jpeg|png|gif)$')]],
    profileText: ['', Validators.required],
    popularity: [0, Validators.required],
  });

  constructor(private fb: FormBuilder,
              private petService: PetService,
              private alertMessageService: AlertMessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.listenToValueChangesOfImageFormControl();
  }

  ngOnDestroy(): void {
    this.imageFormControl$.unsubscribe();
  }

  private listenToValueChangesOfImageFormControl() {
    this.imageFormControl$ = this.image.valueChanges
      .pipe(
        debounceTime(1000),
        filter(value => (value as string).indexOf('images') === -1))
      .subscribe(value => this.image.patchValue(`images/${value}`));
  }

  onSubmit() {
    const petToCreate = this.createPetForm.value as Pet;
    this.createPetForm.disable();
    this.petService.createPet(petToCreate)
      .subscribe({
        next: () => {
          this.alertMessageService.publish({
            title: 'Created a new pet',
            description: `Created ${petToCreate.name}`,
            type: AlertMessageType.SUCCESS
          });
          this.router.navigate(['overview']);
        },
        error: (error) => {
          this.alertMessageService.publish({
            title: `Could not create new pet ${petToCreate.name}`,
            description: error.error.message,
            type: AlertMessageType.DANGER
          });
          this.createPetForm.enable();
        }
      });
  }

  get name(): FormControl {
    return this.createPetForm.get('name') as FormControl;
  }

  get image(): FormControl {
    return this.createPetForm.get('image') as FormControl;
  }
}
