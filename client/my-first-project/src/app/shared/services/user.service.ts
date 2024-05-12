import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Restaurant } from '../model/Restaurant';
import { Booked } from '../model/Booked';
import { Table } from '../model/Table';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('http://localhost:5000/app/getAllUsers', {withCredentials: true});
  }

  getAllRestaurants(){
    return this.http.get<Restaurant[]>('http://localhost:5000/app/getAllRestaurants', {withCredentials: true});
  }
  getAllBooks(){
    return this.http.get<Booked[]>('http://localhost:5000/app/getAllBooks', {withCredentials: true});
  }

  getAllUserBooks(){
    return this.http.get<Booked[]>('http://localhost:5000/app/getAllUserBooks', {withCredentials: true});
  }

  CreateRestaurant(restaurant: Restaurant){
    // const body = new URLSearchParams();
    // body.set('name', Restaurant.name);
    // body.set('table', Table[]);
    // body.set();
    // body.set(); 
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>('http://localhost:5000/app/createRestaurant', restaurant, { headers: headers, withCredentials: true });
    // return this.http.post<Restaurant[]>('http://localhost:5000/app/createRestaurant', {withCredentials: true});
  }

  CreateBook(booked: Booked){ 
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>('http://localhost:5000/app/createBook', booked, { headers: headers, withCredentials: true });
    // return this.http.post<Restaurant[]>('http://localhost:5000/app/createRestaurant', {withCredentials: true});
  }


  delete(name: string) {
    return this.http.delete('http://localhost:5000/app/deleteRestaurant?name=' + name, {withCredentials: true});
  }
  // register(user: User) {
  //   // HTTP POST request
  //   const body = new URLSearchParams();
  //   body.set('email', user.email);
  //   body.set('name', user.name);
  //   body.set('address', user.address);
  //   body.set('nickname', user.nickname);
  //   body.set('password', user.password);

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });

  //   return this.http.post('http://localhost:5000/app/register', body, {headers: headers});
  // }

}
