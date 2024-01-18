import { Component, inject } from '@angular/core';
import {CommonModule, NgIf, NgOptimizedImage} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {PhotoCell} from "../photos-cell/photos-cell.component";
import {PhotoService} from "../photo.service";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.less'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id: string;
  photo: PhotoCell | undefined;
  photoService: PhotoService = inject(PhotoService);

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    this.id = this.route.snapshot.params['id'];
    this
      .photoService
      .getPhotoByName(this.id)
      .then(photo => this.photo = photo)
      .catch(error => {
        console.log("Error:", error);
        setTimeout(() => {
          this
            .photoService
            .getPhotoByName(this.id)
            .then(photo => this.photo = photo)
        }, 5500)
      });
  }

  submitApplication() {
    this.photoService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    this.applyForm.reset()
  }

}
