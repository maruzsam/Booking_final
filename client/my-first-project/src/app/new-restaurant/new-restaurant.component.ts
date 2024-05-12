import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../shared/model/Restaurant';
import { UserService } from '../shared/services/user.service';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { Table } from '../shared/model/Table';

@Component({
  selector: 'app-new-restaurant',
  standalone: true,
  imports: [CommonModule, FormsModule, TableComponent],
  templateUrl: './new-restaurant.component.html',
  styleUrl: './new-restaurant.component.scss'
})

// class RestaurantC implements Restaurant{
//   name: string;
//   tables: Table[];
//   menu: string;
// }

export class NewRestaurantComponent implements OnInit{
  constructor(private userService: UserService, private Router: Router){  
  } 

  restaurant: Restaurant = new Restaurant; 
  ngOnInit() {

  }

  onSubmit(){
    console.log(this.restaurant);   
    this.userService.CreateRestaurant(this.restaurant).subscribe({
      next: (data) => {
        console.log(data);
        this.Router.navigateByUrl("/restaurants");
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  addTable(){
    this.restaurant.tables.push(new Table);
  }

}
