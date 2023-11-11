import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'atc-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

    @Output()
    public sidebarShow = new  EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    showSidebar() {
        this.sidebarShow.emit();
    }

}
