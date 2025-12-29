import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleview-list',
  imports: [],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css',
})
export class SingleviewList
 {
    //declare an array//
    singleProduct:any;
    //create a constructor and initialise the object of apiservice object//
    constructor (private route:ActivatedRoute, private apiservice: Apiservice, private cdr:ChangeDetectorRef){}
    //pageload//
    ngOnInit()
    {
      //parameter mapping//
      const
      productid=this.route.snapshot.paramMap.get('productid');

      if(productid)
      {
        this.apiservice.getsingleProducts(productid).subscribe((data) =>
        {
          this.singleProduct=data;
          this.cdr.detectChanges();
        }
      )
      }
    }
}
