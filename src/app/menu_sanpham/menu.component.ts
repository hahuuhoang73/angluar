import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector:'menu',
  templateUrl: './menu.component.html',


})
export class MenuComponent{
  onactive(){
    window.scroll(0,0);
  }
  danhsach13: any[]= [
    {id:1 ,nhom4_menuid:'4',title:'APPLE MacBook Pro 16',price:'20',discount:'19',picture:'https://i.imgur.com/HSioq45.jpg',description:'The 16-inch MacBook Pro is powered by an advanced M1 Pro processor equipped with 10 CPU cores (8 high-performance cores + 2 power-saving cores) that deliver up to 70% faster performance than M1, for the ability to smoothly handle all tasks from the most basic to the most demanding such as image editing, high-resolution video editing,... Not only has fast response time, but also optimizes significant power savings. power.' },
  ];
  danhsach12: any[]= [
    {id:1 ,nhom4_menuid:'4',title:'APPLE MacBook Pro 16',price:'20',discount:'19',picture:'https://i.imgur.com/HSioq45.jpg',description:'The 16-inch MacBook Pro is powered by an advanced M1 Pro processor equipped with 10 CPU cores (8 high-performance cores + 2 power-saving cores) that deliver up to 70% faster performance than M1, for the ability to smoothly handle all tasks from the most basic to the most demanding such as image editing, high-resolution video editing,... Not only has fast response time, but also optimizes significant power savings. power.' },
  ];
 danhsach:any[]=[];
  sanpham1: any[]= [
    {id:1,name:'Laptop'},
  ];
  menu111: any[]= [
    {id:1,name:'Laptop'},
  ];
  theloai1: any[]= [
    {id:1,name_classify:'Apple'}
  ];


  id: any;
  constructor(private route: ActivatedRoute,private http:HttpClient) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.sp();

    });
    this.menu();
    this.sanpham();
    this.theloai();
  }

  menu(){
    const url = `http://localhost:3704/product1`;
    this.http.get<any>(url)
      .subscribe(data => {
        this.danhsach = data;
      })
  }
  menu11(){
    const url = `http://localhost:3704/menu11?id=`+this.id;
    this.http.get<any>(url)
      .subscribe(data => {
        this.menu111 = data;
      })
  }


  sp(){
    const url = `http://localhost:3704/menu-con?id=`+this.id;
    this.http.get<any>(url)
      .subscribe(data => {
        this.danhsach12 = data[0];
        this.danhsach13=data[1];

      })
  }


  // menu1(){
  //   const url = `http://localhost:5001/mouse?nhom4_menuid=`+this.id;
  //   this.http.get<any>(url)
  //     .subscribe(data => {
  //       this.danhsach1 = data;
  //
  //     })
  // }

  sanpham(){
    const url = `http://localhost:3704/menu`;
    this.http.get<any>(url)
      .subscribe(data => {
        this.sanpham1 = data;
      })
  }

  theloai(){
    const url = `http://localhost:3704/classify`;
    this.http.get<any>(url)
      .subscribe(data => {
        this.theloai1 = data;
      })
  }



}
