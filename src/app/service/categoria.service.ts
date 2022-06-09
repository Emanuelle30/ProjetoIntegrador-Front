import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }
// *Métodos Http*

//Método GET: Aqui busca todos os temas:
  getAllCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://compravisse.herokuapp.com/categorias', this.token)
  }

              //Aqui busca por id do tema:
  getByIdCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://compravisse.herokuapp.com/categorias/${id}`, this.token)
  }

//Método POST: Aqui insere novos temas:
postCategoria(tema: Categoria): Observable<Categoria>{
  return this.http.post<Categoria>('https://compravisse.herokuapp.com/categorias', Categoria,this.token)
}

//Método PUT: Aqui atualiza por tema:
putTema(tema: Categoria): Observable<Categoria>{
  return this.http.put<Categoria>('https://compravisse.herokuapp.com/categorias', Categoria, this.token)
}

//Método DELETE: Aqui exclui:
deleteCategoria(id: number): Observable<Object> {
  return this.http.delete(`https://willihane.herokuapp.com/categorias/${id}`, this.token)
}

}
