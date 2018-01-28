import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  jaClicou = false;

  imagens = [
    {
      link: 'https://d10sjb8bvsi4an.cloudfront.net/images/products/0077/01.jpg', 
      descricao: 'pastel'
    },
    {
      link: 'https://samba.catracalivre.com.br/wp-content/uploads/sites/9/2014/11/feijoada1.jpg', 
      descricao: 'feijoada'
    },
    {
      link: 'https://i1.wp.com/skdesu.com/wp-content/uploads/2015/04/Sushi_Deluxe_at_Sushi_Ten.jpg?fit=800%2C600&ssl=1', 
      descricao: 'sushi'
    },
    {
      link:'http://institucional.confianca.com.br/wp-content/uploads/2016/10/strognofe-confianca.png', 
      descricao: 'strogonoff'
    }   
    
  ];

  imgQueSeraAmpliada;

  mostrarImgAmpliada = function(imagem) {
      this.jaClicou = true; 
      this.imgQueSeraAmpliada = imagem;
  }


}
