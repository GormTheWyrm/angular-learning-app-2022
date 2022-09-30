import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThingListComponent} from './thing-list/thing-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OtherComponent } from './other/other.component';
import { ThingComponent } from './thing/thing.component';

const routes: Routes = [
{path: 'things', component: ThingListComponent},
{path: 'form', component: ReactiveFormComponent},
{path:'', component: OtherComponent},
{path:'thing/:id', component: ThingComponent},
// wip
{path:'**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
