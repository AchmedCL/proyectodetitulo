import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthserviceService } from 'src/app/services/auths/authservice.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private authService: AuthserviceService) { }

  ngOnInit(): void {
    const user = this.authService.getCurrentUser()
    console.log();
    
  }

}
