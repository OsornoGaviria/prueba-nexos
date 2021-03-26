import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBDService } from '../servicios/api-bd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  IdUsusario;

  constructor(private api: ApiBDService, private liknUrl: Router) {}

  ngOnInit(){
    if(this.IdUsusario==undefined){
      this.liknUrl.navigate(['/login'])
    }
    this.VerUsuarios();
  }

  VerUsuarios(){
    let x = {
      funcion: 'verClientes',
    }
    this.api.verClientes(x).subscribe(res=>{
        console.log(res);
    })
  
  }

}
