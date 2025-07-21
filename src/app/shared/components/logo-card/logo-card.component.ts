import { Component } from '@angular/core';
import {CardImgComponent} from "../card-img/card-img.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-logo-card',
  standalone: true,
    imports: [
        CardImgComponent,
        NgForOf
    ],
  templateUrl: './logo-card.component.html',
  styleUrl: './logo-card.component.scss'
})
export class LogoCardComponent {

}
