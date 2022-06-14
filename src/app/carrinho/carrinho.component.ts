import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  usuario: Usuario = new Usuario()
  cep: string
  getCep : string

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

    sumValue:number=1;
    onClick(){
      this.sumValue=this.sumValue+1;
    }

    offClick(){
      if (this.sumValue == 1) {
        this.sumValue = 1
      } 
      
      else {
        this.sumValue=this.sumValue-1;
      }
    }

    // getCep(){
    //   if(this.cep.length >= 8) {
    //   this.cep.getCep(this.cep).subscribe((resp:any) =>{
    //   this.cep = resp})
    //   }
    //   }
  
}