import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]
  idProduto: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public produtoService: ProdutoService,
    private alertas: AlertasService,
    public auth: AuthService
  ) { }

  ngOnInit() {

    window.scroll(0, 0)

    if (environment.token == '') {
      this.alertas.showAlertInfo('Para acessar esta área você precisa estar logado!')
      this.router.navigate(['/entrar'])
    }
    this.auth.refreshToken()
  
    this.getAllProdutos()

    let id = this.route.snapshot.params['id'];
    this.buscarUsuario(id);

  }


  findByIdProduto() {
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.produtoService.listaProdutos = resp
      this.listaProduto = this.produtoService.listaProdutos

    })
  }

  findByIdUsuario(id: number) {
    this.auth.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp

    })
  }

  buscarUsuario(id: number) {
    this.auth.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
      this.usuario.senha = ''

    });
  }

  publicar() {


    this.usuario.id = this.idUsuario
    this.produto.usuario = this.usuario

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.alertas.showAlertSuccess('Cadastro de produto realizado com sucesso!')
      this.produto = new Produto()
      this.getAllProdutos()
    })
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }

  tipoUser() {
    let vendedor: boolean = false

    if (environment.tipo == 'adm') {
      vendedor = true
    }
    return vendedor
  }

}
