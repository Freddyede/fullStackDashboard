import {Component, signal} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.less'
    ]
})
export class HomeComponent {
    datas = [];
    title = signal<string>('front');
    constructor(private http: HttpClient) {  }
    ngOnInit() {
        this.http.get('https://localhost:8000/auth').subscribe((data: any) => {
            this.datas = data;
            this.title.set(data.message);
        });
    }
    changeText() {
        this.title.update(title => (title === 'Front') ?  'New' + ' ' + title : 'Front');
    }
}
