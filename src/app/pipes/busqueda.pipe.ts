import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, args: any): any {
    
    const resultadoBusqueda = [];
    for(let item of value){
      //item.nombre = item.nombre.toLowerCase();
      if(item.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resultadoBusqueda.push(item);
      }
    }
    return resultadoBusqueda;
  }

}
