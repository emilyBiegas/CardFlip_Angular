import { Component, OnInit } from "@angular/core";
import { AlbumsService } from "../services/albums.service";
import { Album } from "../interfaces/album";

@Component({
  selector: "app-seventies",
  templateUrl: "./seventies.component.html",
  styleUrls: ["./seventies.component.css"]
})
export class SeventiesComponent implements OnInit {
  albums: Album[] = [];
  tracklistings: any[] = [];
  index: number = -1;
  indexTwo: number = -1;
  trackNums: number[] = [];
  match: boolean;
  clicks = 0;

  setIndex(indexNum) {
    this.index = indexNum;
    console.log(this.index);
  }

  setIndexTwo(indexNum) {
    this.indexTwo = indexNum;
    console.log(this.indexTwo);
  }

  clickCounter() {
    this.clicks++;
    console.log("click count", this.clicks);
  }
  resetClicks() {
    if (this.clicks === 2) {
      this.clicks = 0;
      setTimeout(() => {
        console.log(this.index, this.indexTwo); // Will result in true;
        this.index = -1;
        this.indexTwo = -1; // Here, value is updated
      }, 1200);
    }
  }

  hideCards() {
    if (this.index > -1 && this.indexTwo > -1) {
      if (
        this.albums[this.index].tracklisting.includes(
          this.tracklistings[this.indexTwo][this.trackNums[this.indexTwo]]
        )
      ) {
        this.match = true;
      }
      setTimeout(() => {
        console.log(this.index, this.indexTwo); // Will result in true;
        this.index = -1;
        this.indexTwo = -1; // Here, value is updated
      }, 1000);
    }
  }

  generateRandomTrack() {
    for (let tracklisting of this.tracklistings) {
      let randTrack = Math.floor(Math.random() * tracklisting.length);
      this.trackNums.push(randTrack);
      console.log(randTrack);
      console.log(this.trackNums);
    }
  }

  constructor(private albumsService: AlbumsService) {}

  getAlbums(): void {
    this.albums = this.albumsService.getAlbums();
  }

  getTracklistings() {
    for (let album of this.albums) {
      this.tracklistings.push(album.tracklisting);
    }
    console.log(this.tracklistings);
  }

  shuffleArrays() {
    for (let i = this.albums.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.albums[i], this.albums[j]] = [this.albums[j], this.albums[i]];
    }
    for (let i = this.tracklistings.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.tracklistings[i], this.tracklistings[j]] = [
        this.tracklistings[j],
        this.tracklistings[i]
      ];
    }
  }
  ngOnInit() {
    this.getAlbums();
    this.getTracklistings();
    this.generateRandomTrack();
    this.shuffleArrays();
    this.resetClicks();
  }
}
