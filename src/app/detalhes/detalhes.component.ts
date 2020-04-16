import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Celular } from '../models/celular.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit{

  celular: Celular;

  constructor(private activatedRoute:ActivatedRoute, public router: Router, public appService: AppService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.celular = this.appService.celulares[id];

  }
voltar(){
  this.router.navigateByUrl('Listar')
}
}