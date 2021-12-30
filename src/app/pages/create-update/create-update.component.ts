import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Factura } from '../../interfaces/factura';
import { FacturaService } from '../../services/factura.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  factura: Factura = {
    id: 0,
    folio: 0,
    descripcion: '',
    observacion: '',
    fecha: new Date(),
    idCliente: 0
  }

  formFactura = new FormGroup({
    folio: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    observacion: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
  });

  constructor(private activatedRoute: ActivatedRoute, private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.factura.id = this.activatedRoute.snapshot.params['id'];
  }


  updateCreateFactura(){
    console.log(this.formFactura);
    if(this.factura.id == 0){
      this.facturaService.postFactura(this.converterToUsuario()).subscribe(
        respuesta => {
          console.log('Create factura', respuesta.data);
        }
      );
    }else{
      this.facturaService.putFactura(this.factura.id, this.converterToUsuario()).subscribe(
        respuesta => {
          console.log('Update factura', respuesta.data);
        }
      );
    }
  }

  converterToUsuario(){
   
    this.factura.folio = this.formFactura.controls['folio'].value;
    this.factura.descripcion = this.formFactura.controls['descripcion'].value;
    this.factura.observacion = this.formFactura.controls['observacion'].value;
    this.factura.fecha = this.formFactura.controls['fecha'].value;

    return this.factura 
  }

}
