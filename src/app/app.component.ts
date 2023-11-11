import { Component } from '@angular/core';

@Component({
    selector: 'atc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    public sidebarShow: boolean = false;

    showSidebar(){
        this.sidebarShow = !this.sidebarShow;
    }
}
