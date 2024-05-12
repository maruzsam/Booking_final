import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Restaurant } from '../../shared/model/Restaurant';
import { UserService } from '../../shared/services/user.service';
import { Table } from '../../shared/model/Table';
import { Booked } from '../../shared/model/Booked';
import { Route, Router } from '@angular/router';
import { CommonModule, DatePipe, DatePipeConfig } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  constructor(private userService: UserService, private Router: Router, private authService: AuthService, private datePipe: DatePipe, private changeDetector: ChangeDetectorRef){  
  }

  dates: string[] = [];
  restaurants?: Restaurant[]; 
  booked?: Booked[];
  selectedDate: string | undefined;

  ngOnInit() {
    
    this.userService.getAllRestaurants().subscribe({
      next: (data) => {
        this.restaurants = data;
      }, error: (err) => {
        console.log(err);
      }
    });

    this.userService.getAllBooks().subscribe({
      next: (data) => {
        this.booked = data;
      }, error: (err) => {
        console.log(err);
      }
    });

    this.userService.getAllUserBooks().subscribe({
      next: (data) => {
        this.booked = data;
      }, error: (err) => {
        console.log(err);
      }
    });

  }

  logout() {
    this.authService.logout().subscribe({
      next: (data) => {
        console.log(data);
        this.Router.navigateByUrl('/login');
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  isBooked(restaurant: any, table: any): boolean {
    return this.booked ? this.booked.some(booked => 
        booked.restaurantId === restaurant._id &&
        booked.tableNumber === table.number &&
        this.datePipe.transform(booked.day, 'yyyy-MM-dd') === this.selectedDate
    ) : false;
}


  book(restaurant: Restaurant, table: Table, date: string){
    var booked = new Booked;
    booked.day = new Date(date);
    booked.restaurantId = restaurant.name;
    booked.tableNumber = table.number;
    console.log();
    this.userService.CreateBook(booked).subscribe({
      next: (data) => {
        console.log(data);
        this.Router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.Router.navigate(['/book']);
        });

        // this.Router.navigateByUrl("/restaurants");
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  change(restaurant: Restaurant, table: Table, date: string){
    this.selectedDate = date;
    this.changeDetector.detectChanges();
    console.log(restaurant, table, date);
  }

}

