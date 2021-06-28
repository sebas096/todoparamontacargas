import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  menuItems: any[];
  isMobileMenu: Boolean = false;

  ROUTES = [
    { path: '/roles', title: 'Roles',  icon:'pe-7s-users', class: '' },
    { path: '/building', title: 'Obra',  icon:'pe-7s-home', class: '' },
    { path: '/user', title: 'Usuarios',  icon:'pe-7s-user', class: '' },
    { path: '/work-flow', title: 'Flujos',  icon:'pe-7s-network', class: '' },
    { path: '/invoice', title: 'Factura',  icon:'pe-7s-note2', class: '' },
  ];
  
  constructor(private ngZone:NgZone) { 
    window.onresize = (e) =>
    {
        this.ngZone.run(() => {
          if(window.innerWidth > 991) {
            this.isMobileMenu = false;
          } else{
            this.isMobileMenu = true;
          }
        });
    };
  }

  ngOnInit() {
  }

}
