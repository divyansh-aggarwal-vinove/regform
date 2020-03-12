import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{ path: '', component: ListingComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'edit/:id', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
