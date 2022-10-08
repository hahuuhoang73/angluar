import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router'
@Component({
  selector:'chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls:['./chitiet.component.css'],
})
export class ChitietComponent{
  onactive(){
    window.scroll(0,0);
  }
  danhsach1: any[]=[{id:1,name:'Laptop'}];
  danhsach: any[]= [
    {id:1 ,nhom4_menuid:'4',title:'APPLE MacBook Pro 16',price:'20',discount:'19',picture:'https://i.imgur.com/HSioq45.jpg',description:'The 16-inch MacBook Pro is powered by an advanced M1 Pro processor equipped with 10 CPU cores (8 high-performance cores + 2 power-saving cores) that deliver up to 70% faster performance than M1, for the ability to smoothly handle all tasks from the most basic to the most demanding such as image editing, high-resolution video editing,... Not only has fast response time, but also optimizes significant power savings. power.' },

  ];
  con: any[]= [
    {id:1 ,nhom4_menuid:'4',title:'APPLE MacBook Pro 16',price:'20',discount:'19',picture:'https://i.imgur.com/HSioq45.jpg',description:'The 16-inch MacBook Pro is powered by an advanced M1 Pro processor equipped with 10 CPU cores (8 high-performance cores + 2 power-saving cores) that deliver up to 70% faster performance than M1, for the ability to smoothly handle all tasks from the most basic to the most demanding such as image editing, high-resolution video editing,... Not only has fast response time, but also optimizes significant power savings. power.' },
  ];
  anh:any[]=[
    {id:1,thumbnail:'https://i.imgur.com/EIcwxR8.jpg'}
  ]
  p:number=1;
  id: any;
  constructor(private route: ActivatedRoute,private http:HttpClient) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.menu();
   //   this.menu1()


    });

    // this.route.params.subscribe(params => {
    //   this.nhom4_menuid = params['id.nhom4_menuid'];
    //
    //   this.menu1();
    // });
  }

  menu(){
    const url = `http://localhost:3704/product?id=`+this.id;
    this.http.get<any>(url)
      .subscribe(data => {
        this.danhsach = data[0];
        this.anh=data[1];
        this.menu1();
      })
  }

  menu1(){
    const url = `http://localhost:3704/mouse?nhom4_menuid=`+this.danhsach[0].nhom4_menuid;
    this.http.get<any>(url)
      .subscribe(data => {
        this.danhsach1 = data;

      })
  }




}
