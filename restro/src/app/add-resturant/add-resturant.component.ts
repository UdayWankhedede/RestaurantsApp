import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ResturantService } from '../ResturantServices/resturant.service';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrl: './add-resturant.component.css'
})
export class AddResturantComponent {

  // <!-- here we are using Reactive Form -->

  // if the alert is true the it show the alert msg on html side 
  alert:boolean = false;
  addResturant = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    }
  )
  constructor(private resto :ResturantService) {

  }

  collectRestroData()
  {
    // here we are getting the data from the form into addResturant
    // console.warn(this.addResturant.value);
    this.resto.saveRestaurant(this.addResturant.value).subscribe((res)=>{
      this.alert = true;
    });
    // reset is in built method that reset the form after reset we pass blank object
    this.addResturant.reset({});
  }
// here we define the function to close the alert bar by click event which is define in html
// by setting it flase if alert is false the alert msg is hide

closeAlert() {
  this.alert = false;
  }

}
