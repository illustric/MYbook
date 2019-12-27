import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./pages/books/books.module').then( m => m.BooksPageModule),
    canActivate: [AuthService]
  },
  
  {
    path: 'book-details',
    loadChildren: () => import('./pages/book-details/book-details.module').then( m => m.BookDetailsPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'singup',
    loadChildren: () => import('./pages/singup/singup.module').then( m => m.SingupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'book-details/:id',
    loadChildren: './pages/book-details/book-details.module#BookDetailsPageModule'
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
