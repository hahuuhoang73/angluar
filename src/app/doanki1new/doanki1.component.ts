import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'doanki1new',
  templateUrl: './doanki1.component.html',

})
export class Doanki1Component{
  onactive(){
    window.scroll(0,0);
  }
  sanpham1: any[]= [
    {id:1,name:'Laptop'},
  ];

  theloai:any[]=[
    {id:1,name_classify:'Apple'},
  ];

 cart1:any[]=[
   {id:1 ,nhom4_menuid:'4',title:'APPLE MacBook Pro 16',price:'20',discount:'19',picture:'https://i.imgur.com/HSioq45.jpg',description:'The 16-inch MacBook Pro is powered by an advanced M1 Pro processor equipped with 10 CPU cores (8 high-performance cores + 2 power-saving cores) that deliver up to 70% faster performance than M1, for the ability to smoothly handle all tasks from the most basic to the most demanding such as image editing, high-resolution video editing,... Not only has fast response time, but also optimizes significant power savings. power.' },
 ]

  constructor(private http:HttpClient) {
  }
  ngOnInit(){//ham này tự động chạy sau khi in ra html
    this.sanpham();
    this.classify();
    this.cart11();

  }
  sanpham(){

    const url = `http://localhost:3704/menu`;
    this.http.get<any>(url)
      .subscribe(data => {

        this.sanpham1 = data;



      })
  }
  classify(){
    const url = `http://localhost:3704/classify`;
    this.http.get<any>(url)
      .subscribe(data => {

        this.theloai = data;

      })
  }
  cart11(){
    const url = `http://localhost:3704/cart`;
    this.http.get<any>(url)
      .subscribe(data => {
        this.cart1 = data;

      })
  }


}
