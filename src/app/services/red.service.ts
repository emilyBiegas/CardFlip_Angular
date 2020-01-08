import { Injectable } from "@angular/core";
import { Redalbum } from "../interfaces/redalbum";

@Injectable({
  providedIn: "root"
})
export class RedService {
  redAlbums: Redalbum[] = [
    { front: "/assets/nebraska.jpg", back: "/assets/nebraska2.jpg" },
    { front: "/assets/tender.jpg", back: "/assets/tender2.jpg" },
    { front: "/assets/sandinista.jpg", back: "/assets/sandinista2.jpg" },
    { front: "/assets/letitbe.jpg", back: "/assets/letitbe2.jpg" }
  ];

  getRedAlbums() {
    return this.redAlbums;
  }
  constructor() {}
}
