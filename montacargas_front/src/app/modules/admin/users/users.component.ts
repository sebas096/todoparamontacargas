import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { User } from 'app/shared/models/user.model';
import { UserService } from 'app/core/services/user.service';
import { Rol } from 'app/shared/models/rol.model';
import { RolService } from 'app/core/services/rol.service';
import { BuildingService } from 'app/core/services/building.service';
import { Building } from 'app/shared/models/building.model';
import { Response } from 'app/shared/models/response.model';
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";
import { LoadingService } from 'app/core/services/loading.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    idRol: ['', [Validators.required]],
    active: [true, [Validators.required]],
    idsBuiding: new FormArray([])
  });
  users: User[];
  buildings: Building[];
  noFilteredUsers: User[];
  noFilteredBuildings: Building[];
  roles: Rol[];
  private ctx: CanvasRenderingContext2D;
  mouseDown = false
  constructor(private fb: FormBuilder, private userService: UserService, private rolService: RolService, private buildingService: BuildingService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadUser();
    this.buildingService.getBuilding().subscribe((data) => {
      this.buildings = data;
      this.noFilteredBuildings = data;
    })
    this.initCanvas()
    this.loadRoles();

  }

  ngSubmit() {
    console.log(this.userForm.value);
  }

  loadUser() {
    this.loadingService.handleLoading(true);
    this.userService.getUsers().subscribe((usersData) => {
      this.loadingService.handleLoading(false);
      this.users = usersData;
      this.noFilteredUsers = usersData;
    }, () => {
      this.loadingService.handleError("Error al traer la informacion", false, true, true);
    })
  }

  loadRoles() {
    this.rolService.getRoles().subscribe((response) => {
      this.roles = response;
    })
  }
  filterBuilding(event) {
    const filterKey = event.target.value;
    if (filterKey != "") {
      this.buildings = this.noFilteredBuildings.filter((building => {
        return building.name.toLowerCase().includes(filterKey);
      }))
    } else {
      this.buildings = this.noFilteredBuildings;
    }
  }

  filterUser(event){
    const filterKey = event.target.value;
    if (filterKey != "") {
      console.log(this.noFilteredUsers)
      this.users = this.noFilteredUsers.filter(((user:any) => {
        
        return user.user.email.toLowerCase().includes(filterKey);
      }))
    } else {
      this.users = this.noFilteredUsers;
    }
  }
  

  get id() { return this.userForm.get('id') }
  get name() { return this.userForm.get('name') }
  get lastName() { return this.userForm.get('lastName') }
  get email() { return this.userForm.get('email') }
  get password() { return this.userForm.get('password') }
  get idRol() { return this.userForm.get('idRol') }
  get idsBuiding() { return this.userForm.get('idsBuiding') }
  get active() { return this.userForm.get('active') }


  initCanvas() {
    const canvas = document.getElementById('signCanvas');
    /* if (canvas.getContext) {
       this.ctx = canvas.getContext("2d");
 
       canvas.addEventListener("mouseup", this.handleMouseUpEvent);
       canvas.addEventListener("mousedown", this.handleMouseDownEvent);
       canvas.addEventListener("mousemove", this.handleMouseMoveEvent);
     }*/

  }



  handleMouseUpEvent = (event) => {
    this.mouseDown = false;
  }

  handleMouseDownEvent = (event) => {
    this.mouseDown = true
    this.ctx.beginPath()
    this.ctx.moveTo(event.layerX, event.layerY);
  }

  handleMouseMoveEvent = (event) => {
    if (this.mouseDown) {
      this.ctx.lineTo(event.layerX - 1, event.layerY);
      this.ctx.stroke()
    }
  }

  edit(user) {
    var element: HTMLInputElement;
    this.id.setValue(user.user.id);
    this.name.setValue(user.user.name);
    this.lastName.setValue(user.user.lastName);
    this.email.setValue(user.user.email);
    this.idRol.setValue(user.user.idRol);
    this.active.setValue(user.user.active);
    const control: FormArray = this.idsBuiding as FormArray
    let controlLength = control.value.length;
    while (controlLength > 0) {
      control.removeAt(controlLength - 1);
      controlLength--;
    }
    for (let index = 0; index < this.buildings.length; index++) {
      let input = document.getElementById((this.buildings[index].id).toString());
      if (input != null) {
        (<HTMLInputElement>input).checked = false;
      }
    }
    for (let index = 0; index < user.buildings.length; index++) {
      control.push(new FormControl(user.buildings[index]));
      let input = document.getElementById(user.buildings[index]);
      if (input != null) {
        (<HTMLInputElement>input).checked = true;
      }
    }
    let input = document.getElementById("userActive");
    if (input != null && user.user.active == 1) {
      (<HTMLInputElement>input).checked = true;
    }
  }

  saveUser() {
    if (this.userForm.status == "VALID" && (this.idsBuiding as FormArray).length > 0) {
      if (this.userForm.value.active) {
        this.userForm.get("active").setValue(1);
      } else {
        this.userForm.get("active").setValue(0);
      }
      this.loadingService.handleLoading(true);
      if (this.id.value == '' || this.id.value == null) {
        this.userService.saveUser(this.userForm.value).subscribe((data: Response) => {
          if (data.status) {
            this.loadingService.handleError(data.message, false, false, true);
            this.cancel();
            this.loadUser();
          } else {
            this.loadingService.handleError(data.message, false, true, true);
          }
        }, () => {
          this.loadingService.handleError("Error al guardar el usuario", false, true, true);
        })
      } else {
        this.userService.updateUser(this.userForm.value).subscribe((data: Response) => {
          if (data.status) {
            this.loadingService.handleError(data.message, false, false, true);
            this.cancel();
            this.loadUser();
          } else {
            this.loadingService.handleError(data.message, false, true, true);
          }
        }, () => {
          this.loadingService.handleError("Error al guardar el usuario", false, true, true);
        })
      }
    } else if (this.userForm.status !== "VALID") {
      this.loadingService.handleError("Debes ingresar todos los campos", false, true, true);
    } else {
      this.loadingService.handleError("Debes seleccionar una obra", false, true, true);
    }
  }

  onChangeBuildingCheck(building) {
    const control: FormArray = this.idsBuiding as FormArray
    let band = 0;
    for (let index = 0; index < control.length; index++) {
      if (building.id == control.value[index]) {
        control.removeAt(index);
        index = control.length;
        band = 1;
      }
    }
    if (band == 0) {
      control.push(new FormControl(building.id))
    }
  }

  scrollToTop(el) {
    const duration = 600;
    const interval = 5;
    const move = el.scrollTop * interval / duration;
    observableInterval(interval).pipe(
      scan((acc, curr) => acc - move, el.scrollTop),
      tap(position => el.scrollTop = position),
      takeWhile(val => val > 0)).subscribe();
  }

  cancel() {
    const control: FormArray = this.idsBuiding as FormArray
    for (let index = 0; index < control.length; index++) {
      let input = document.getElementById(control.value[index]);
      if (input != null) {
        (<HTMLInputElement>input).checked = false;
      }
    }
    let controlLength = control.value.length;
    while (controlLength > 0) {
      control.removeAt(controlLength - 1);
      controlLength--;
    }
    this.userForm.reset();
    this.active.setValue(true);
  }

}