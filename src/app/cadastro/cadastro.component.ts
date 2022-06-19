import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUser: string
  senha: boolean = false


  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService,
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value   
  }

  tipoUsuario(event: any) {
    this.tipoUser = event.target.value
  }

  cadastro(){
    this.usuario.tipo = this.tipoUser
    if(this.confirmarSenha == this.usuario.senha){
      this.authService.cadastrar(this.usuario).subscribe({
        next: (resp:Usuario)=>{
        this.usuario = resp;
        this.alertas.showAlertSuccess('Usuario cadastrado com sucesso!')
        this.router.navigate(['/login'])
      }, 
      error: erro => {
        if (erro.status == 400) {
          this.alertas.showAlertInfo('Usuário já cadastrado! Faça login.')
          this.router.navigate(['/login'])
        } 
      },
    })    
  } else {
    this.alertas.showAlertDanger('As senhas não coincidem!')
  }
}
}