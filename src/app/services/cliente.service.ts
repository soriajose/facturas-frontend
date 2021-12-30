import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseDTO } from '../interfaces/response-dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }


  getAllClientes(){
    return this.httpClient.get<ResponseDTO>('http://localhost:8080/clientes');
  }


}
