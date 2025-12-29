import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { About } from "./pages/about/about";
import { Services } from "./pages/services/services";
import { ContactUs } from "./pages/contact-us/contact-us";
import { InterpolationEx } from "./interpolation-ex/interpolation-ex";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mission_Angular');
}
