import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="main">
    <div class="fundoMonkey">
      <img class="monkey" src="../../../assets/Monkey.jpg">
    </div>
    <div class="text">
      <h2>Sobre o <span>Website</span></h2>
      <p>O nosso site é focado em uma das funcionalidades do aplicativo Ossain, desenvolvido pelo BulbasaurGroup
         ele tem como objetivo o envio e o recebimento de denúncias sobre o meio ambiente para ajudar a diminuir
          o número de queimadas, descarte de entulho inadequado, despejo de resíduos tóxicos e diversos outros
           crimes que prejudicam o planeta. Essa pagina foi feita para a tarefa de Programação Web II na escola
            Professor Horácio Augusto da Silveira que consiste em criar e testar uma API criada no Beereceptor,
              para testar a API faremos um sistema de registro e listagem de denuncias.</p>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
