import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiEnvironment } from 'src/environments/apiEnvironment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  usuarioLogado: string = "Deslogado";
  authorities: string[] = [];
  administrador: boolean = false;
  versao: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = 'TEste'
    this.authorities = ['USER']
    this.administrador = true
    this.versao = apiEnvironment.versao;
  }

  logout() {

  }

  navegarInicio() {

  }

  navegarAlvaras() {

  }


}
