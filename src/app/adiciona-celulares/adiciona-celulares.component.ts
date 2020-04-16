import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adiciona-celulares',
  templateUrl: './adiciona-celulares.component.html',
  styleUrls: ['./adiciona-celulares.component.scss']
})
export class AdicionaCelularesComponent implements OnInit {
  
  formulario = new FormGroup({
    id: new FormControl(null),
    urlImagem: new FormControl(null, [Validators.required]),
  nome: new FormControl(null, [Validators.required]),
      descricao: new FormControl(null, [Validators.required]),
       memoria: new FormControl(null, [this.somenteNumeros, Validators.required]),
       marca: new FormControl(null, [Validators.required]),
       valor: new FormControl(null, [Validators.required])
     });
  
     jsonDados: string;

     constructor(public appService: AppService, public router: Router) { }

 
     ngOnInit(): void {}
     somenteNumeros(control: AbstractControl): ValidationErrors | null {
      const texto = control.value;
      if (isNaN(Number(texto))) {
        return { somenteNumeros: true };
      } else {
        return null;
      }
  
    }
  

  limpar() {
    this.jsonDados = null;
}

enviar() {
      this.appService.celulares.push(this.formulario.value);

      this.router.navigateByUrl('Listar')
    
}
}
