import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { KirbyClickerComponent } from './kirby-clicker/kirby-clicker.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    pathMatch: "full",
  },
  {
    path: "kirby-clicker",
    component: KirbyClickerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
