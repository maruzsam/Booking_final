import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../shared/model/Restaurant';
import { UserService } from '../shared/services/user.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent implements OnInit {

  constructor(private userService: UserService, private Router: Router, private http: HttpClient){  
  } 

  restaurants?: Restaurant[]; 
  ngOnInit() {
    this.userService.getAllRestaurants().subscribe({
      next: (data) => {
        this.restaurants = data;
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  newRestaurant() {
    this.Router.navigateByUrl("/newRestaurant");
  }
  userManagement() {
    this.Router.navigateByUrl("/user-management");
  }    

  // deleteRestaurant(restaurant: Restaurant) {
  //   this.http.delete(`http://localhost:5000/app/deleteRestaurant?name=${restaurant.name}`).subscribe(
  //     response => {
  //       console.log(response);
  //       // itt frissítheted a nézetet, ha szükséges
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   )
  // }

  deleteRestaurant(restaurant: Restaurant) {       
          // user deletion    
    this.userService.delete(restaurant.name).subscribe({
      next: (data) => {
        console.log(data);
        this.Router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.Router.navigate(['/restaurants']);
        });        
      }, error: (err) => {
        console.log(err);
      }
    }); 
  }

}
