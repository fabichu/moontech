import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';

const routes: Routes = [
  {
    path: '',
    component: CocktailComponent,
  },
  {
    path: 'detalles/:id',
    component: CocktailDetailsComponent,
  },
  {
    path: 'detalles',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
