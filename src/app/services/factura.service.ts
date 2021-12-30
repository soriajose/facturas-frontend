import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDTO } from '../interfaces/response-dto';
import { Factura } from '../interfaces/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private httpClient: HttpClient) { }


  getAllFacturas(){
    return this.httpClient.get<ResponseDTO>('http://localhost:8080/facturas');
  }

  postFactura(factura: Factura){
    return this.httpClient.post<ResponseDTO>('http://localhost:8080/facturas', factura);
  }

  putFactura(idFactura: number, input: Factura){
    return this.httpClient.put<ResponseDTO>('http://localhost:8080/facturas/' + idFactura, input);
  }

  deleteFactura(idFactura: number){
    return this.httpClient.delete<ResponseDTO>('http://localhost:8080/facturas/' + idFactura);
  }

}
