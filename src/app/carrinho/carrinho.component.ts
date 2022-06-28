import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
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


  calcularFrete() {
    Swal.fire({
      title: 'OXENTE! O frete é grátis! 🤑',
      text: "Aproveite! Promoção de inauguração! 🥳",
    })
  }

  total() {
    return this.comprados.map((item) => +item.preco).reduce((a, b) => a + b, 0);

  }

  parcela() {
    return this.total() / 12
  }

  finalizarCompra() {
    if (environment.token == '') {
      Swal.fire({
        title: 'Faça login para finalizar sua compra!',
        icon: 'warning'
      }
      )
      this.router.navigate(['/login'])
      // alert('Você precisa estar logado!')

    } else if (this.listaCompras.length > 0) {
      Swal.fire(
        'Compra realizada com sucesso!',
        'Aguarde... Em instantes você receberá todas as informações da sua compra no e-mail cadastrado!',
        'success'
        //,
        //confirmButtonText: 'Cool',
        //confirmButtonColor: ''
      )
      // alert('Muito obrigado pela compra!')
      this.listaCompras = []
      environment.carrinho = [0]
      this.router.navigate(['/inicio'])
    } else {
      Swal.fire({
        title: 'Seu carrinho está vazio!',
        icon: 'warning'
      }
      )
      //alert('Seu carrinho está vazio!')
    }
  }

}