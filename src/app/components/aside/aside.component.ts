import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NoteFormComponent } from '../note-form/note-form.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [HeaderComponent, NoteFormComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

}
