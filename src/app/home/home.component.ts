import {Component, inject, Input} from '@angular/core';
import {PhotosCellComponent, PhotoCell} from "../photos-cell/photos-cell.component";
import {NgForOf} from "@angular/common";
import {PhotoService} from "../photo.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhotosCellComponent, NgForOf],
  templateUrl: "./home.component.html",
  styleUrl: './home.component.less'
})

export class HomeComponent {

  photoCellList: PhotoCell[] = []
  photoService: PhotoService = inject(PhotoService);
  filteredPhotoList: PhotoCell[] = []
  search: string = "";

  constructor() {
     this
       .photoService
       .getAllCitiesPhotos()
       .then(cities => {
         this.photoCellList = cities;
         this.filteredPhotoList= this.photoCellList;
       });

  }

  filterResults(text: string) {
    //const text = this.search;
    console.log("Text: ", text);
    if (!text) {
      console.log("Not text");
      this.filteredPhotoList = this.photoCellList;
      return;
    }

    this.filteredPhotoList = this.photoCellList.filter(
      photo => photo?.city
        .toLowerCase()
        .includes(text.toLowerCase())
    );
  }

}
