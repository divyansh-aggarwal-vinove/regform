import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';


const routes: Routes = [{ path: 'emp_list', component: ListingComponent },
                        // { path: '**', component: PageNotFoundComopnent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
