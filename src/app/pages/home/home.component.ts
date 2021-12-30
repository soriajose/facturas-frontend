import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { FacturaService } from 'src/app/services/factura.service';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { Factura } from 'src/app/interfaces/factura';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  misFacturas: Factura[] = [];
  misClientes: Cliente[] = [];

  busquedaFactura = '';

  constructor(private facturaService: FacturaService, private clienteService: ClienteService,
              private router: Router) { }

  ngOnInit(): void {
    
    this.getFacturas();

    this.getClientes();

  }


  getFacturas(){
    this.facturaService.getAllFacturas().subscribe(
      respuesta => {
        this.misFacturas = respuesta.data;
      }
    );
    
  }

  getClientes(){
    this.clienteService.getAllClientes().subscribe(
      respuesta => {
        this.misClientes = respuesta.data;
      }
    );
  }

  navegarUpdate(idFactura: number){
    this.router.navigate(['create-update', idFactura]);
  }

  deleteFactura(idFactura: number){
    this.facturaService.deleteFactura(idFactura).subscribe(
      respuesta => {
        console.log('Delete', respuesta.data);
      }
    );
  }

}
