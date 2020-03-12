import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [{ path: '', component: ListingComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
