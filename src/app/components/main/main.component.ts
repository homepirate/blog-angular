import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NoteListComponent } from '../note-list/note-list.component';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, NoteListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
