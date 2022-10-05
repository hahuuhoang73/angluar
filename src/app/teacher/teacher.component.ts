import {Component, Input} from "@angular/core";

@Component({
  selector :'teacher',
  templateUrl: './teacher.component.html'

})
export class TeacherComponent{
@Input()
   name?: string;
  hoten = 'Trịnh Quang Hòa';
  sdt = '0376653703';
  email = 'tringquanghoa@gmail.com';
  diachi = '8a,tôn thất thuyết,mĩ đình,hà nội';
}
