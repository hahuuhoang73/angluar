import {Component, Input} from "@angular/core";

@Component({
  selector:'student',
  templateUrl:'./student.component.html'

})
export class StudentComponent{

  @Input()
  classN?: string;


    hoten = 'Phùng Văn Vũ';
    sobangai = 0;
   email = 'phungvanvu@gmail.com';
    adres = 'khong co';

tang(){
  this.sobangai ++;
}
giam(){
  if (this.sobangai >0) {
    this.sobangai--;
  }
}
}
