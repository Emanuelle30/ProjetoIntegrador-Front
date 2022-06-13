import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  // function Trim(strTexto)
  //     {
  //      return strTexto.replace(/^\s+|\s+$/g, '');
  //     }

  //   function IsCEP(strCEP, blnVazio)
  //     {
  //        var objER = /^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/;

  //         strCEP = Trim(strCEP)
  //         if(strCEP.length > 0)
  //             {
  //                 if(objER.test(strCEP))
  //                     return true;
  //                 else
  //                     return false;
  //             }
  //         else
  //             return blnVazio;
  //     }

}