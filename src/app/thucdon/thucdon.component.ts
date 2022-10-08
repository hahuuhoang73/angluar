import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:'thucdon',
  templateUrl:'./thucdon.component.html'
})
export class ThucdonComponent{
  monan: any=[
    {id:1,name:'Chicken',icon:'abc'},
    {id:2,name:'Rice',icon:'abc'},
  ];
  flag = true;
  on(){
    this.flag=true;
  }
  off(){
    this.flag=false;
  }
  constructor(private http:HttpClient) {
  }
  ngOnInit(){//ham này tự động chạy sau khi in ra html
    this.danhsach();

  }
  danhsach() {

    const url = `https://foodgroup.herokuapp.com/api/menu`;
    this.http.get<any>(url)
      .subscribe(data => {
        var ls =data.data;
        this.monan = ls;

      })
  }
}
