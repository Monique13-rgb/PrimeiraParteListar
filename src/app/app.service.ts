import { Injectable } from '@angular/core';
import { Celular } from './models/celular.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

celulares: Celular[] = []

  constructor() {
    
    this.celulares = [{
      id: 0, 
      urlImagem: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-silver-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566953858420",
      nome: "Iphone 11pro Max",
      descricao: "Lançamento",
      memoria: "512GB",
      marca: "Apple",
      valor: "R$:11,900",
      descricaoDetalhada: "O Apple iPhone 11 Pro Max é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização. A tela de 6.5 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2688x1242 pixel. As funcionalidades oferecidas pelo Apple iPhone 11 Pro Max são muitas e top de linha. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS presente no aparelho. Tem também leitor multimídia, videoconferência, e bluetooth. Enfatizamos a excelente memória interna de 512 GB mas sem a possibilidade de expansão.Câmera de 12 megapixel. A espessura de 8.1 milímetros é realmente ótima e torna o Apple iPhone 11 Pro Max ainda mais espetacular."
    },    
{
  id: 1, 
  urlImagem: "https://s2.glbimg.com/yC1EehKP2GKanV7dxgOFzwgyISY=/306x39:1592x1080/1280x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/t/3/KfFW1mQiqhmPrRWBZAZw/xiaomi-mi-10-1-.jpg",
  nome: "Xiaomi Mi 10",
  descricao: "Lançamento",
  memoria: "512GB",
  marca: "Xiaomi",
  valor: "R$:7,900",
 descricaoDetalhada: "A Xiaomi anunciou a chegada dos celulares premium Xiaomi Mi 10 e Xiaomi Mi 10 Pro. O destaque dos smartphones está na câmera quádrupla capaz de registrar fotos de até 108 MP. Os lançamentos rivalizam com a recém-apresentada linha Galaxy S20, da Samsung. A ficha técnica inclui processador Snapdragon 865, memória RAM de até 12 GB, armazenamento de até 512 GB e suporte a 5G."
},     
{
  id: 2, 
  urlImagem: "https://tecphone.com.br/wp-content/uploads/2019/09/AndroidPIT-lg-g8-thinq-hero-w810h462.jpg",
  nome: "LG G9 THINQ",
  descricao: "Lançamento",
  memoria: "512GB",
  marca: "LG",
  valor: "R$:7,900",
  descricaoDetalhada:"O LG G9 ThinQ será o mais novo modelo da linha G ThinQ da LG. Sendo ele, um dos melhores aparelhos já fabricados por essa marca. Afinal, ele possui diversas funcionalidades que serão bem vindas tanto para o seu uso pessoal quanto para o uso profissional. Uma dessas funcionalidades é o LTE 4G que permite a transferência de dados de uma maneira muito eficiente e rápida. Além disso, o modelo também possui um ótimo leitor multimídia, videoconferência, e bluetooth."
},  
{
  id: 3, 
  urlImagem: "https://tecphone.com.br/wp-content/uploads/2019/09/ASUS-Zenfone-6-2019-oficial.jpg",
  nome: "Asus ZenFone 7",
  descricao: "Lançamento",
  memoria: "512GB",
  marca: "Asus",
  valor: "R$:7,900",
  descricaoDetalhada:"O novo lançamento da Asus possui um dos acabamentos mais incríveis que você poderá encontrar no mercado no próximo ano. Isso devido ao fato de que ele possui uma tela fantástica de 6.4 polegadas com uma das mais altas resoluções que existem no mercado: 2340×1080 pixel. Além disso, o modelo possui apenas 9.2 milímetros e 190 gramas. Sendo assim, ele será um modelo consideravelmente fino e leve."
},  
{
  id: 4, 
  urlImagem: "https://img.ibxk.com.br/2020/01/15/15125218640133.jpg",
  nome: "Sony Xperia 1",
  descricao: "Lançamento",
  memoria: "8GB",
  marca: "Sony",
  valor: "R$:3,900",
  descricaoDetalhada: "O Sony Xperia 1 é um smartphone Android com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos. A tela de 6.5 polegadas coloca esse Sony no topo de sua categoria. Além disso a resolução é das mais altas atualmente em circulação: 3840x1644 pixel. As funcionalidades oferecidas pelo Sony Xperia 1 são muitas e todas top de linha. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS presente no aparelho. Tem também leitor multimídia, videoconferência, e bluetooth. Enfatizamos a excelente memória interna de 128 GB com a possibilidade de expansão.Câmera de 12 megapixel. A espessura de 8.2 milímetros é realmente ótima e torna o Sony Xperia 1 ainda mais espetacular."
},  
{
  id: 5, 
  urlImagem: "https://s2.glbimg.com/M3hCEw8SxZneLuWLzIfPVPhyojA=/0x0:1920x1080/1280x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/S/w/wupsRxRDKLxbjtl2jVIQ/motorola-edge-smoky-sangria-laydown-combo.jpg",
  nome: "Motorola Edge",
  descricao: "Lançamento",
  memoria: "512GB",
  marca: "Motorola",
  valor: "R$:4,900",
  descricaoDetalhada: "Os smartphones apostam na ficha técnica de ponta: câmera de até 108 MP, Android 10 e bateria para até dois dias de uso. A fabricante não lançava um celular super-premium desde o Moto Z3, em 2018."
},  
{
  id: 6, 
  urlImagem: "https://timeline.canaltech.com.br/340703.1400.4/samsung-galaxy-s20-anunciado-conheca-o-novo-topo-de-linha-com-supercamera.jpg",
  nome: "Samsung S20",
  descricao: "Lançamento",
  memoria: "128GB",
  marca: "Samsung",
  valor: "R$:6,900",
  descricaoDetalhada:"O Galaxy S20 traz ficha técnica de ponta. A versão única do modelo à venda no Brasil tem memória RAM de 8 GB no padrão LPDDR5, o mais recente da indústria, além de processador Exynos 990, mais avançado até o momento produzido pela Samsung. O hardware garante alto desempenho nas mais variadas tarefas no celular, incluindo fluidez na abertura de múltiplos aplicativos, seja no modo de tela dividida, pop-up, ou nos modos em conjunto, resultado em até três apps funcionando simultaneamente sem engasgos."
}];  
  }
}
