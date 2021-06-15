import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthserviceService } from 'src/app/services/auths/authservice.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private authService: AuthserviceService) { }

  ngOnInit(): void {
  }
  async showUser() {
    const user = await this.authService.getCurrentUser();
    console.log(user?.email);
    
  }
}
