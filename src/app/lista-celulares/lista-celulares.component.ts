import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Celular } from '../models/celular.model';

@Component({
  selector: 'app-lista-celulares',
  templateUrl: './lista-celulares.component.html',
  styleUrls: ['./lista-celulares.component.scss']
})
export class ListaCelularesComponent implements OnInit {

celular: Celular []=[];

  constructor(public appService: AppService, public router: Router,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    
  }
  
  detalhes(celular: Celular){
      this.router.navigate(['celular',celular.id]);
  } 
  
  navegar () {
    this.router.navigateByUrl('Adicionar')
  }  
  
}