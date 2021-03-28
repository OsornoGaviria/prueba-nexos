import { Component, OnInit } from '@angular/core';
import { ApiBDService } from '../../servicios/api-bd.service';
import { ModalController } from '@ionic/angular';
import { ErrorComponent } from '../../componentes/error/error.component';
import { Exito2Component } from '../../componentes/exito2/exito2.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-ct',
  templateUrl: './registrar-ct.page.html',
  styleUrls: ['./registrar-ct.page.scss'],
})
export class RegistrarCtPage implements OnInit {

  entidades; cuentas; vc=0; numero;titular;cedula;alias;tipo;entidad;
  constructor(private api: ApiBDService, private modal: ModalController, private route: Router) { }

  ngOnInit() {
    this.VerCuentas();
    this.VerEntidades();
    
  }

  VerCuentas(){
    let x = {
      funcion: 'VerCuentas',
    }
    this.api.verProductos(x).subscribe(res=>{
      this.cuentas=res;
    })
  }

  VerEntidades(){
    let x = {
      funcion: 'VerEntidades',

    }
    this.api.VerEntidades(x).subscribe(res=>{
      this.entidades=res;
    })
  }


  validaDigitos(){
      if(this.numero.toString().length<11){
          this.vc=1;
      }else if(this.numero.toString().length>11)
      {
        this.vc=2;
      }else {
        this.vc=0;
      }
   
  }

  aceptar(){
    
    if(this.titular==undefined || this.titular==""){
      this.errorAlert("Ingrese el nombre del titular de la cuenta")
    }else if(this.cedula==undefined || this.cedula==""){
      this.errorAlert("Ingrese el número de indentificación del titular de la cuenta")
    }else if(this.alias==undefined || this.alias==""){
      this.errorAlert("Ingrese un nombre o alias para identificar la cuenta")
    }else if(this.numero==undefined || this.numero==""){
      this.errorAlert("Ingrese el número de la cuenta")
    }else if(this.vc==1){
      this.errorAlert("Por favor verifique el número ingresado")
    }else if(this.vc==2){
      this.errorAlert("Por favor verifique el número ingresado")
    }else if(this.tipo==undefined || this.tipo==""){
      this.errorAlert("Seleccione el tipo de cuenta")
    }else if(this.entidad==undefined || this.entidad==""){
      this.errorAlert("Seleccione la entidad a la cual pertenece la cuenta")
    }else {
      let x = {
        funcion: 'RegistrarCT',
        idUsuario: window.localStorage['IdUsuario'],
        titular: this.titular,
        cedula: this.cedula,
        alias: this.alias,
        numero: this.numero,
        tipo: this.tipo,
        entidad: this.entidad
      }
      this.api.RegistrarCT(x).subscribe(res=>{
        this.exito('Cuenta registrada con exito');
        this.route.navigate(['/cterceros'])
      })
    }
  }

  async errorAlert(data){
    const modal = await this.modal.create({
      component: ErrorComponent,
      cssClass: 'my-custom-modal-css-alert',
      componentProps:{
       data: data
      },
      showBackdrop:true,
      backdropDismiss:false,
    } )
 
   return await modal.present();  
 
  }


  async exito(data){
    const modal = await this.modal.create({
      component: Exito2Component,
      cssClass: 'my-custom-modal-css-alert',
      componentProps:{
       data: data
      },
      showBackdrop:true,
      backdropDismiss:false,
    } )
 
   return await modal.present();  
 
  }

}
