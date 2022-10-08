import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:'sonfpt',
  templateUrl: './home1.component.html',
  styleUrls:['./home1.css'],
})
export class SonfptComponent{
  onactive(){
    window.scroll(0,0);
  }
  home: any[]= [
    {id:1 ,nhom4_menuid:'4',title:'APPLE MacBook Pro 16',price:'20',discount:'19',picture:'https://i.imgur.com/HSioq45.jpg',description:'The 16-inch MacBook Pro is powered by an advanced M1 Pro processor equipped with 10 CPU cores (8 high-performance cores + 2 power-saving cores) that deliver up to 70% faster performance than M1, for the ability to smoothly handle all tasks from the most basic to the most demanding such as image editing, high-resolution video editing,... Not only has fast response time, but also optimizes significant power savings. power.' },
  ];
  danhsach: any[]= [
    {id:1 ,nhom4_menuid:'4',title:'APPLE MacBook Pro 16',price:'20',discount:'19',picture:'https://i.imgur.com/HSioq45.jpg',description:'The 16-inch MacBook Pro is powered by an advanced M1 Pro processor equipped with 10 CPU cores (8 high-performance cores + 2 power-saving cores) that deliver up to 70% faster performance than M1, for the ability to smoothly handle all tasks from the most basic to the most demanding such as image editing, high-resolution video editing,... Not only has fast response time, but also optimizes significant power savings. power.' },
  ];
  p:number=1;



  constructor(private http:HttpClient) {}
  ngOnInit(){//ham này tự động chạy sau khi in ra html
    this.menu();
    this.menu1();
  }

  menu(){
    const url = `http://localhost:3704/product2`;
    this.http.get<any>(url)
      .subscribe(data => {
        this.home = data;
      })
  }


  menu1(){
    const url = `http://localhost:3704/product1`;
    this.http.get<any>(url)
      .subscribe(data => {
        this.danhsach = data;
      })
  }
}
