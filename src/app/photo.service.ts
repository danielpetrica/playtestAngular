import { Injectable } from '@angular/core';
import {PhotoCell} from "./photos-cell/photos-cell.component";
import axios, {AxiosResponse} from 'axios';
import {throws} from "node:assert";
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  baseUrl = 'https://random.danielpetrica.com/api/';
  constructor() { }

  async getAllCitiesPhotos(): Promise<PhotoCell[]> {
    let photos: PhotoCell[] = [];
    let cities:  CityObject[] = [];

    return await axios.get(this.baseUrl + 'city')
      .then((response: AxiosResponse<CityObject[]>) => {
        let temp = response
          .data
          .slice(250, 350);
        cities = temp;
        console.log("Temp:", temp);
        return temp
      })
      .catch(error => {
        console.log("Error: ", error);
        return [] as CityObject[];
      })
      .then (() => {
        console.log("Cities: ", cities)
        cities.map(
          city =>  this.getPhotoByName(city.name).then(photo => photos.push(photo))
        )
        return photos
      })
  }

  async getPhotoByName(id: string): Promise<PhotoCell> {
    return await axios
      .get(this.baseUrl + 'city/' + id)
      .then(
        (response: AxiosResponse<PhotoCell[]>) => response.data[0]
      )
      .catch(error => {
        throw (error)
      })
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Newsletter subscribe received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

}

export interface CityObject {
  city: string,
  name: string,
  "photo_count": number
}
