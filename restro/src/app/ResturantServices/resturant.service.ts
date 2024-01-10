import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {

  url = "http://localhost:3000/resturants";
  constructor(private http : HttpClient) { }

  getList()
  {
    return this.http.get(this.url)
    alert("inside getList service");
  }

  saveRestaurant(data :any)
  {
    // console.warn("Inside resturant service SaveResturant method");
    console.warn(data);
    return this.http.post(this.url,data);
  }
  deleteRestro(id: number)
  {
    return this.http.delete(`${this.url}/${id}`);
    console.warn(`${this.url}/${id}`);
  }

  getCurrentResto(id: number)
  {
    console.warn("=>",id)
    return this.http.get(`"http://localhost:3000/resturants"/${id}`);

  }
}
