import { Component, OnInit } from '@angular/core';
import { Celular } from '../models/celular.model';

@Component({
  selector: 'app-lista-celulares',
  templateUrl: './lista-celulares.component.html',
  styleUrls: ['./lista-celulares.component.scss']
})
export class ListaCelularesComponent implements OnInit {

  celulares: Celular[] = [];

  constructor() { }

  ngOnInit(): void {

    this.celulares = [

      {
        id: 1,
        urlImagem: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812930312',
        nome: 'Iphone 11Pro Max',
        descricao: 'Descrição: Lançamento',
        memoria: 'Memória: 512Gb',
        marca: 'Marca: Apple',
        valor: 'Valor: R$:9,500 ou 12x R$726,16',
      },
      
  {
        id: 2,
        urlImagem: 'https://a-static.mlcdn.com.br/1500x1500/super-lancamento-galaxy-s10-128gb-8gb-fone-samsung/zepperatacado/6118558955/a1b44ac36c7af3c1788fa771e4782f83.jpg',
        nome: 'Galaxy s10',
        descricao: 'Descrição: Lançamento',
        memoria: 'Memória: 128Gb',
        marca: 'Marca: Samsung',
        valor: 'Valor: R$:6,400 ou 12x R$390,16',

  },

 {
        id: 3,
        urlImagem: 'https://s2.glbimg.com/ICKVbk0AdGUYenj3j5EoV9vaXyU=/197x0:1612x1440/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/w/7/d98ozZQYCSiZJooBDI3Q/mi-pro.png',
        nome: 'Mi 10',
        descricao: 'Descrição: Lançamento',
        memoria: 'Memória: 12Gb',
        marca: 'Marca: Xiomi',
        valor: 'R$:3,500 ou 12x R$230,90',

      },
  {
        id: 4,
        urlImagem: 'https://img.olhardigital.com.br/uploads/acervo_imagens/2020/01/r16x9/20200116115417_1200_675_-_lg_g9_thinq__leak__sem_marca_d_agua_.jpg',
        nome: 'G9 TinG',
        descricao: 'Descrição: Lançamento',
        memoria: 'Memória: 12Gb',
        marca: 'Marca: LG',
        valor: 'R$:2,900 ou 12x R$190,16',

      },
  {
        id: 5,
        urlImagem: 'https://brmotorola.vteximg.com.br/arquivos/ids/161989-700-700/novo-lancamento-motorola-one-quattro-zoom-cosmic-purple-1.png?v=637021705036170000',
        nome: 'One Zoom',
        descricao: 'Descrição: Lançamento',
        memoria: 'Memória: 12Gb',
        marca: 'Marca: Motorola',
        valor: 'R$:3,500 ou 12x R$390,16',

      },
      
 {
        id: 6,
        urlImagem: 'https://i.ytimg.com/vi/9yRTGVSBJQk/maxresdefault.jpg',
        nome: 'Zenfone 7 Icebgerg',
        descricao: 'Descrição: Lançamento',
        memoria: 'Memória: 12Gb',
        marca: 'Marca: Asus',
        valor: 'R$:2,900 ou 12x R$210,16',

      }
    ];
    }
  }