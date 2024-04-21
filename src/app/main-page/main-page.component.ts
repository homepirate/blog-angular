import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { AsideComponent } from '../components/aside/aside.component';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [HeaderComponent, MainComponent, AsideComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
