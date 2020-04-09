import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCelularesComponent } from './lista-celulares/lista-celulares.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AdicionaCelularesComponent } from './adiciona-celulares/adiciona-celulares.component';


const routes: Routes = [
  { path: '', redirectTo: 'Listar', pathMatch: 'full' },
  { path: 'Listar', component: ListaCelularesComponent },
  { path: 'Adicionar', component: AdicionaCelularesComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
