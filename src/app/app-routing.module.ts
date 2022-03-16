import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: DashboardComponent },
  { path: 'books/create', component: BookCreateComponent },
  { path: 'books/details/:isbn', component: BookDetailsComponent }, // books/details/467895398
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
TODO:
- Weiterleitung ☑️
- Links
- Detailseite



- (Create / Formular)






*/
