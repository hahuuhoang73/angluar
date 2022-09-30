import {Component} from "@angular/core";

@Component({
  selector:'classroom',
  templateUrl:'./classroom.component.html'
})
export class ClassroomComponent{

  className = 'T2207A - SEM 1';
  schoolName ='FPT Academy International';
  siso = 27;

  themSinhVien(){
    this.siso ++;
  }
  giamsinhvien() {
    if (this.siso > 0) {
      this.siso--;
    }
  }
}

