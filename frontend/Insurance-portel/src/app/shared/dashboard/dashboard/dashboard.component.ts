import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { LoginserviceService } from 'src/app/loginform/loginservice.service';
import { Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService:LoginserviceService, private router:Router) { }

  ngOnInit() {
    $(function() {
      $('.close').click(function() {
        $('.ad').css('display', 'none');
      })
    });
    $(document).ready(function() {
      $('.nav-trigger').click(function() {
        $('.side-nav').toggleClass('visible');
      });
    });
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/Login'])
    
  }

}
