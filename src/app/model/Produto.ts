import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Produto{
public id: number
public nome: string
public descricao: string
public preco: number
public foto: string
public tamanho: string
public avaliacao: number
public fornecedor: string
public categoria: Categoria
public usuario: Usuario
}