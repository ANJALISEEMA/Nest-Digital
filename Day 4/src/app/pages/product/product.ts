import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  //creating array to hold data// 
  products:any[]=[];

  //creating an object without creating class//
  constructor(private apiservice:Apiservice,private cdr:ChangeDetectorRef){}

  // page loading //
  ngOnInit() {
    this.apiservice.getproduct().subscribe((data: any) =>{
      this.products=data;
      this.cdr.detectChanges()

  });
  
}
}