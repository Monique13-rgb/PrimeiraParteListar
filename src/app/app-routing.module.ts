import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCelularesComponent } from './lista-celulares/lista-celulares.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [
  { path: '', redirectTo: 'celulares', pathMatch: 'full' },
  { path: 'celulares', component: ListaCelularesComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
