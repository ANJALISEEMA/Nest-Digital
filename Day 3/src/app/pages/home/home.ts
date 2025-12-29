import { Component } from '@angular/core';
import { Carousel } from "../../carousel/carousel";
import { Carousel1 } from "../../carousel1/carousel1";

@Component({
  selector: 'app-home',
  imports: [Carousel, Carousel1],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
