import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBDService } from '../../servicios/api-bd.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName; userPass; dataUser;
  
  constructor(private api: ApiBDService, private route: Router) {}

  ngOnInit() {
  }


  Login(){
    if(this.userName=='' || this.userName==undefined){
        alert("Ingrese su nombre de usuario")
    }else if(this.userPass=='' || this.userPass==undefined){
      alert("Ingrese su contraseña")
    }else{
      let x = {
        funcion: 'Login',
        username: this.userName,
        userpass: this.userPass
      }
      this.api.Login(x).subscribe(res=>{
         this.dataUser=res;
         if(this.dataUser!=undefined){
            for(var x=0; x<this.dataUser.length; x++){
              if(this.dataUser[x]['identificacion']!=undefined){
                window.localStorage['IdUsuario']=this.dataUser[x]['identificacion'];   
                this.route.navigate(['/home']);
              }
             
            }
         }
      })
    
    }
   
  }

}
