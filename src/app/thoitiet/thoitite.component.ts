import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector :'thoitiet',
  templateUrl: 'thoitite.component.html'

})
export class ThoititeComponent{
  city: string='';
nhietdo: number=30;
  doam: number=70;
  apsaut: number=1000;
constructor(private http:HttpClient) {
}
ngOnInit(){//ham này tự động chạy sau khi in ra html
 this.hanoi();
 this.sg();
 this.to();
 this.lo();
 this.be();
 this.ns();
}
hanoi() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    this.http.get<any>(url)
      .subscribe(data => {

        this.nhietdo = data.main.temp;
        this.doam = data.main.humidity;
        this.apsaut = data.main.pressure;
        this.city = data.name + "," + data.sys.country;
      })
  }
  sg() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    this.http.get<any>(url)
      .subscribe(data => {

        this.nhietdo = data.main.temp;
        this.doam = data.main.humidity;
        this.apsaut = data.main.pressure;
        this.city = data.name + "," + data.sys.country;
      })
  }
  to() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    this.http.get<any>(url)
      .subscribe(data => {

        this.nhietdo = data.main.temp;
        this.doam = data.main.humidity;
        this.apsaut = data.main.pressure;
        this.city = data.name + "," + data.sys.country;
      })
  }
  lo() {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
    this.http.get<any>(url)
      .subscribe(data => {

        this.nhietdo = data.main.temp;
        this.doam = data.main.humidity;
        this.apsaut = data.main.pressure;
        this.city = data.name + "," + data.sys.country;
      })
  }
  be() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    this.http.get<any>(url)
      .subscribe(data => {

        this.nhietdo = data.main.temp;
        this.doam = data.main.humidity;
        this.apsaut = data.main.pressure;
        this.city = data.name + "," + data.sys.country;
      })
  }

  ns() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    this.http.get<any>(url)
      .subscribe(data => {

        this.nhietdo = data.main.temp;
        this.doam = data.main.humidity;
        this.apsaut = data.main.pressure;
        this.city = data.name + "," + data.sys.country;
      })
  }
}
