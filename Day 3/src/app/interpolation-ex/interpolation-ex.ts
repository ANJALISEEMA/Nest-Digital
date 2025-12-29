import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interpolation-ex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interpolation-ex.html',
  styleUrls: ['./interpolation-ex.css'],
})
export class InterpolationEx {
  cards = [
    {
      name: 'Anjali',
      email: 'abc@gmail.com',
      image: 'https://tse3.mm.bing.net/th/id/OIP.O9SeUhlXY-tFJ7bmjL5o5gHaFj?pid=Api&P=0&h=220'
    },
    {
      name: 'Anju',
      email: 'ab@gmail.com',
      image: 'https://tse3.mm.bing.net/th/id/OIP.O9SeUhlXY-tFJ7bmjL5o5gHaFj?pid=Api&P=0&h=220'
    }
  ];
}
