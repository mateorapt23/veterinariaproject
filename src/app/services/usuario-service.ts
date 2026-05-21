import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private http = inject(HttpClient);

  private API_USUARIOS = 'https://veterinariaproject-9d530-default-rtdb.firebaseio.com/usuarios.json'

  //Método POST
  postUsuarios(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.API_USUARIOS, usuario);
  }
  
  //GET
 getUsuarios(): Observable<Usuario[]> {
  return this.http
    .get<{ [key: string]: Usuario }>(this.API_USUARIOS)
    .pipe(
      map(res => {
        if (!res) return [];

        return Object.keys(res).map(id => ({
          ...res[id],
          id: id
        }));
      })
    );
}
}
