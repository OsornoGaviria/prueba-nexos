import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBDService } from '../../servicios/api-bd.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-cpropias',
  templateUrl: './cpropias.page.html',
  styleUrls: ['./cpropias.page.scss'],
})
export class CpropiasPage implements OnInit {

  IdUsusario; productos; origen; destino;valor; saldoOrigen; saldoDestino;
  constructor(private api: ApiBDService, private route: Router, private modal:ModalController) {}


  ngOnInit() {
    this.IdUsusario=window.localStorage['IdUsuario'];
    this.verProducctos();
  }

  verProducctos(){
    let x = {
      funcion: 'verProductos',
      idcliente: this.IdUsusario,
    }
    this.api.verProductos(x).subscribe(res=>{
      this.productos=res;
    })
  }


  aceptar(){
    if(this.origen==undefined || this.origen==""){
      alert("Seleccione el producto de origen")
    }else if(this.destino==undefined || this.destino==""){
      alert("Seleccione el producto de destino")
    }else if(this.origen==this.destino){
      alert("No puedes tranferir fondos a una misma cuenta")
    }else if(this.valor==undefined || this.valor=="" || this.valor==0){
      alert("Ingrese el valor a tranferir")
    }else if(parseInt(this.valor) > parseInt(this.saldoOrigen)){
      alert("Fondos insuficientes")
    }else{
    
      let x = {
        funcion: 'Tranferencia',
        cOrigen: this.origen,
        cDestino: this.destino,
        valorT: this.valor,
        saldoO: this.saldoOrigen,
        saldoD: this.saldoDestino,
        idcliente: this.IdUsusario,
      }
      this.api.Tranferencia(x).subscribe(res=>{
       
        console.log(res)
      })

    }
  }

  validaSaldoO(){
    let x = {
      funcion: 'validaSaldo',
      idCuenta: this.origen,
    }
    this.api.validaSaldo(x).subscribe(res=>{
      this.saldoOrigen=res;
      this.saldoOrigen=this.saldoOrigen.saldo;
      console.log(this.saldoOrigen)
    })
  }

  validaSaldoD(){
    let x = {
      funcion: 'validaSaldo',
      idCuenta: this.destino,
    }
    this.api.validaSaldo(x).subscribe(res=>{
      this.saldoDestino=res;
      this.saldoDestino=this.saldoDestino.saldo;
      console.log(this.saldoDestino)
    })
  }

  
}
