import { Component, OnInit } from '@angular/core';
import { ResturantService } from '../ResturantServices/resturant.service';
import { Console } from 'console';

@Component({
  selector: 'app-list-resturant',
  templateUrl: './list-resturant.component.html',
  styleUrl: './list-resturant.component.css'
})
export class ListResturantComponent implements OnInit {

  collectionResto : any = [];

  constructor(private resto : ResturantService )
  {
  
  }
  ngOnInit(): void {
       // method call
      //  console.warn(this.resto.getList())

      this.resto.getList().subscribe((result)=>
      {
        console.warn(result);
        this.collectionResto = result;
      })

  }
  deleteRestro(items:number)
  {
    this.collectionResto.splice(items-1,1);
    console.warn("deleteRestro => ",items);
    this.resto.deleteRestro(items).subscribe((res)=>
    {
      console.warn("inside list resturant deleteRestro method ",res);
    })
    // The splice() method adds and/or removes array elements.
    
  }


}
