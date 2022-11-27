import { Component, OnInit } from '@angular/core';
import { DenunciasService } from './../../services/denuncias.service';

@Component({
  selector: 'app-listar-denuncia',
  template:`
    <div class="card">
    <div class="card-body">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>TipoDenuncia</th>
                    <th>Conteudo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of denuncias">
                    <td>{{item.nome}}</td>
                    <td>{{item.email}}</td>
					<td>{{item.tipoDenuncia}}</td>
                    <td>{{item.denuncia}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

  `,
  styleUrls: ['./listar-denuncia.component.css']
})
export class ListarDenunciaComponent implements OnInit {

  denuncias: Array<any> = [];

  constructor(private denunciasSerivce: DenunciasService) {}

  ngOnInit() {
    this.listarTodasDenuncias();
  }

  listarTodasDenuncias(){
    this.denunciasSerivce.listarDenuncias().subscribe(e =>
      this.denuncias = e
      );
  }

}
