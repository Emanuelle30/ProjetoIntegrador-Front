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

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAllCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://compravisse.herokuapp.com/categorias')
  }

  getByIdCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://compravisse.herokuapp.com/categorias/${id}`)
  }

  getByDescricaoCategoria(descricao: string): Observable<Categoria>{
    return this.http.get<Categoria>(`https://compravisse.herokuapp.com/categorias/categoria/${descricao}`)
  }

postCategoria(categoria: Categoria): Observable<Categoria>{
  return this.http.post<Categoria>('https://compravisse.herokuapp.com/categorias', categoria,this.token)
}

putCategoria(categoria: Categoria): Observable<Categoria>{
  return this.http.put<Categoria>('https://compravisse.herokuapp.com/categorias', categoria, this.token)
}

deleteCategoria(id: number) {
  return this.http.delete(`https://compravisse.herokuapp.com/categorias/${id}`, this.token)
}

}
