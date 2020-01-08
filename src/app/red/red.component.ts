import { Component, OnInit } from "@angular/core";
import { RedService } from "../services/red.service";
import { Redalbum } from "../interfaces/redalbum";

@Component({
  selector: "app-red",
  templateUrl: "./red.component.html",
  styleUrls: ["./red.component.css"]
})
export class RedComponent implements OnInit {
  albums: Redalbum[] = [];

  constructor(private redService: RedService) {}

  getRedAlbums() {
    this.albums = this.redService.getRedAlbums();
  }
  ngOnInit() {
    this.getRedAlbums();
  }
}
