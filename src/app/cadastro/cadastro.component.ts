import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
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
    private router: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
    if(this.usuario.senha == this.confirmarSenha){
      this.senha = true
    } else{
      this.senha = false
    }
    return this.senha     
  }

  tipoUsuario(event: any) {
    this.tipoUser = event.target.value
  }

  cadastro(){
    this.usuario.tipo = this.tipoUser
    console.log('botao funcionou')
    if(this.senha == true){
      this.authService.cadastrar(this.usuario).subscribe({
        next: (resp:Usuario)=>{
        this.usuario = resp;
        alert('Usuario cadastrado com sucesso!')
        this.router.navigate(['/login'])
        console.log('estranhamente entrou aqui')
      }, 
      error: erro => {
        if (erro.status == 400) {
          alert('Usuário já cadastrado! Faça login.')
          this.router.navigate(['/login'])
        } 
        // Não gera erro
        //if (erro.status != 400) {
        //   alert('Senhas não coicidem.')
        //   console.log('Entrou no else, mas n emitiu alerta.')
        // }
      },
    })    
  }
}

}