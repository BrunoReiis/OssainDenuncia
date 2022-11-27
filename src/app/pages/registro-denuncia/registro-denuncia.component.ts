import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DenunciasService } from './../../services/denuncias.service';

@Component({
  selector: 'app-registro-denuncia',
  template: `
    <section id="denuncia">
      <form id="form" method="post" #frm="ngForm" (ngSubmit)="criarDenuncia(frm.value)">
        <div class="denunciaForm">
          <div class="itemDenuncia">
            <label class="labelDenuncia"> Nome<span>*</span> </label>
            <input
              type="text"
              name="nome"
              class="inputDenuncia"
              [(ngModel)]="denuncia.nome" required
            />
          </div>

          <div class="itemDenuncia" id="email">
            <label class="labelDenuncia"> E-mail<span>*</span> </label>
            <input
              type="email"
              name="email"
              class="inputDenuncia"
              [(ngModel)]="denuncia.email" required email
            />
          </div>

          <div class="itemDenuncia">
            <label class="labelDenuncia">
              Tipo da Denuncia<span>*</span>
            </label>
            <input
              type="text"
              name="tipoDenuncia"
              class="inputDenuncia"
              [(ngModel)]="denuncia.tipoDenuncia" required tipoDenuncia
            />
          </div>

          <div class="itemDenuncia">
            <label class="labelDenuncia">
              O que está acontecendo?<span>*</span>
            </label>
            <textarea
              name="denuncia"
              class="text-area"
              [(ngModel)]="denuncia.denuncia" required denuncia
            ></textarea>
          </div>
          <button type="submit" id="btn" class="enviarButton">Enviar</button>
        </div>
      </form>
    </section>
  `,
  styleUrls: ['./registro-denuncia.component.css'],
})
export class RegistroDenunciaComponent implements OnInit {
  
  denuncia: any;

  constructor(private denunciasSerivce: DenunciasService) {}

  ngOnInit(): void {

    this.denuncia = {};



    // let messages: any = [];

    // let btn = document.getElementById('btn') as HTMLButtonElement;

    // const addMessage = (e: any) => {
    //   e.preventDefault();

    //   let form = document.getElementById('form') as HTMLFormElement;

    //   let message = {
    //     nome: this.nome,
    //     tipoDenuncia: this.tipoDenuncia,
    //     email: this.email,
    //     denuncia: this.denuncia,
    //   };

    //   messages.push(message);
    //   form.reset();

    //   console.log(messages);

    //   localStorage.setItem('MessageList', JSON.stringify(messages));
    // };
    // document.addEventListener('DOMContentLoaded', () => {
    //   btn.addEventListener('click', addMessage);
    // });

  }

  criarDenuncia(frm: FormGroup){
    this.denunciasSerivce.criarDenuncia(this.denuncia).subscribe(resposta => {
      this.denuncia.post(resposta);

      frm.reset();
    } );
  }
}
