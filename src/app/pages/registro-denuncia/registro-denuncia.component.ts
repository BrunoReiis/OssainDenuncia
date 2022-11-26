import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-denuncia',
  template: `
     <section id="denuncia">
          <form id="form"  #denunciaForm="ngForm">
            <div class="denunciaForm">

              <div class="itemDenuncia">
                <label class="labelDenuncia">
                  Nome<span>*</span>
                </label> 
                <input 
                  type="text" 
                  name="nome" 
                  class="inputDenuncia" 
                  [(ngModel)]="nome"
                  #nomeInput="ngModel"
                >
              </div>

              <div class="itemDenuncia" id="email">
                <label class="labelDenuncia">
                  E-mail<span>*</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  class="inputDenuncia" 
                  [(ngModel)]="email"
                  #emailInput = "ngModel"
                >
              </div>

              <div class="itemDenuncia">
                <label class="labelDenuncia">
                  Tipo da Denuncia<span>*</span>
                </label>
                <input 
                  type="text" 
                  name="tipoDenuncia" 
                  class="inputDenuncia" 
                  [(ngModel)]="tipoDenuncia"
                >
              </div>

              <div class="itemDenuncia">
                <label class="labelDenuncia">
                  O que está acontecendo?<span>*</span>
                </label>
                <textarea 
                  name="denuncia" 
                  class="text-area" 
                  [(ngModel)]="denuncia"
                ></textarea>
              </div>
              <button 
                type="submit" 
                id="btn"
                class="enviarButton"
              >
                Enviar
              </button>
            </div>
          </form>
    </section>
  `,
  styleUrls: ['./registro-denuncia.component.css']
})
export class RegistroDenunciaComponent implements OnInit {

  nome: string = '';
  tipoDenuncia: string = '';
  email: string = '';
  denuncia: string = '';

  constructor() { }

  ngOnInit(): void {

    let messages : any = [];

    let btn = document.getElementById('btn') as HTMLButtonElement;

    const addMessage = (e : any) => {
      e.preventDefault();
      
      let form = document.getElementById('form') as HTMLFormElement;
  
      let message = {
        nome: this.nome,
        tipoDenuncia: this.tipoDenuncia,
        email: this.email,
        denuncia: this.denuncia
      }
  
      messages.push(message);
      form.reset()
  
      console.log(messages)
  
      localStorage.setItem('MessageList', JSON.stringify(messages));
  
    }
    document.addEventListener('DOMContentLoaded', () => {
      btn.addEventListener('click', addMessage)
    })


  }

}
