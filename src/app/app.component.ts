import { Component } from '@angular/core';
import { Alunos } from './arquivo' /* Faz a importação do arquivo que contem os dados */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de alunos';
  lista_alunos = Alunos; /* Array com os dados dos alunos */
}
