import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
export interface PhotoCell extends PhotoObject{
  city_2: string
}
export interface PhotoObject {
  city: string,
  color: string,
  country: string,
  id: string,
  links: object,
  location: object,
  "url_full": string,
  "url_raw": string,
  "url_regular": string,
  "url_small": string,
  "url_small_s3": string,
  "url_thumb": string,
  urls: object
}

@Component({
  selector: 'app-photos-cell',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './photos-cell.component.html',
  styleUrl: '' +
    './photos-cell.component.less'
})
export class PhotosCellComponent {
  @Input() Photo!: PhotoCell;
}
