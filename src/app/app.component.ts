import { Component } from '@angular/core';
import { alunos } from './app.alunos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de alunos';
  lista_alunos = alunos;
}
