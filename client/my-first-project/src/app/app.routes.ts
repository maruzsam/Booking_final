import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'signup', loadComponent: () => import('./signup/signup.component').then((c) => c.SignupComponent) },
    { path: 'login', loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent) },
    { path: 'restaurants', loadComponent: () => import('./restaurants/restaurants.component').then((c) => c.RestaurantsComponent) },
    { path: 'newRestaurant', loadComponent: () => import('./new-restaurant/new-restaurant.component').then((c) => c.NewRestaurantComponent) },
    { path: 'book', loadComponent: () => import('./restaurants/book/book.component').then((c) => c.BookComponent) },
    { path: 'user-management', loadComponent: () => import('./user-management/user-management.component').then((c) => c.UserManagementComponent), canActivate: [authGuard] },
    { path: '**', redirectTo: 'login' }
];
