import { Injectable } from '@angular/core';
import { Celular } from './models/celular.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

celulares: Celular[] = []

  constructor() {
    
    this.celulares = [{
      id: 1, 
      urlImagem: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-silver-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566953858420",
      nome: "Iphone 11pro Max ",
      descricao: "Lançamento",
      memoria: "512GB",
      marca: "Apple",
      valor: "R$:7,900",
    },    
{
  id: 2, 
  urlImagem: "https://http2.mlstatic.com/smartphone-xiaomi-mi9-se-dualchip-64gb-azul-lancamento-D_NQ_NP_862228-MLB31097143881_062019-F.jpg",
  nome: "Xiaomi",
  descricao: "Lançamento",
  memoria: "512GB",
  marca: "Apple",
  valor: "R$:7,900",
},     
{
  id: 3, 
  urlImagem: "https://s2.glbimg.com/JQthcW7Ub_YGR1qwfh3ZmE7ndwg=/130x0:581x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/5/b/rRja5nRjuvHsMNx8avaw/lg-k61.jpg",
  nome: "LG",
  descricao: "Lançamento",
  memoria: "512GB",
  marca: "Apple",
  valor: "R$:7,900",
},  
{
  id: 4, 
  urlImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgslP26cbWN2oFt1f0fFnk6Nm9rVRB-rB155oEMnnIY_dVVcq9&usqp=CAU",
  nome: "Asus",
  descricao: "Lançamento",
  memoria: "512GB",
  marca: "Apple",
  valor: "R$:7,900",
},  
{
  id: 5, 
  urlImagem: "https://brmotorola.vteximg.com.br/arquivos/ids/161200-700-700/MotorolaOneVision1000x-azulsafira.png?v=636927434266800000",
  nome: "Motorola",
  descricao: "Lançamento",
  memoria: "512GB",
  marca: "Apple",
  valor: "R$:7,900",
},  

{
  id: 6, 
  urlImagem: "https://a-static.mlcdn.com.br/1500x1500/super-lancamento-galaxy-s10-128gb-8gb-fone-samsung/zepperatacado/6118558955/a1b44ac36c7af3c1788fa771e4782f83.jpg",
  nome: "Samsung A20",
  descricao: "Lançamento",
  memoria: "512GB",
  marca: "Apple",
  valor: "R$:7,900",
}];  
  }
}
