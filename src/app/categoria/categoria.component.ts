import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria: number
  listaProduto: Produto []
  
  constructor(
    private categoriaService: CategoriaService,    
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdTema(this.idCategoria)
    this.categoria.produto = this.listaProduto    
  }

  findByIdTema(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }


}