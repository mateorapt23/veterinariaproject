import { Component } from '@angular/core';
import { Nav } from "../../shared/nav/nav";
import { Hero } from '../../shared/hero/hero';


@Component({
  selector: 'app-home',
  imports: [Nav, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
