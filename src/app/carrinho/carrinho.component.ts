import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { CarrinhoService } from '../service/carrinho.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  usuario: Usuario = new Usuario()
  produto: Produto
  listaCompras = this.carrinho.listar()
  comprados = this.carrinho.listar();


  constructor(

    private router: Router,

    private carrinho: CarrinhoService,

    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

  }

  sumValue: number = 1;
  onClick() {
    this.sumValue = this.sumValue + 1;
  }

  offClick() {
    if (this.sumValue == 1) {
      this.sumValue = 1
    }

    else {
      this.sumValue = this.sumValue - 1;
    }
  }

  total() {
    return this.comprados.map((item) => +item.preco).reduce((a, b) => a + b, 0);

  }

  parcela() {
    return this.total() / 12
  }

  finalizaCompra() {
    if (environment.token == '') {
      this.alertas.showAlertInfo('Faça login para finalizar sua compra!')
      this.router.navigate(['/login'])
    }
  }

}