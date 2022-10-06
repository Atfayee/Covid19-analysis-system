import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'environment',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    constructor(public router: Router,) { }

    ngOnInit() { }

    public workSpace(): void {
        this.router.navigateByUrl("Gene");
    }
}