import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{ActivatedRoute}from'@angular/router'
import { ResturantService } from '../ResturantServices/resturant.service';
@Component({
  selector: 'app-update-resturant',
  templateUrl: './update-resturant.component.html',
  styleUrl: './update-resturant.component.css'
})
export class UpdateResturantComponent implements OnInit{

  editResturant = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    }
  )
  constructor(private router : ActivatedRoute,private resto :ResturantService)
  {

  }
  ngOnInit(): void {
    // console.warn(this.router.snapshot.params['id']);
     this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((res)=>
     {
      // console.warn(res);

      // this.editResturant = new FormGroup(
      //   {
      //     name: new FormControl(res['name']),
      //     email: new FormControl(res['email']),
      //     address: new FormControl('')
      //   }
      // )

     })
  }
  

}
