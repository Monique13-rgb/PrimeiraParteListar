import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-celulares',
  templateUrl: './lista-celulares.component.html',
  styleUrls: ['./lista-celulares.component.scss']
})
export class ListaCelularesComponent implements OnInit {

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
  }
  minhafuncao(){
    alert("deu certo!");
  } 
  
  navegar () {
    this.router.navigateByUrl('Adicionar')
  }   
}