import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NoteFormComponent } from '../note-form/note-form.component';
import { MyArchiveComponent } from '../my-archive/my-archive.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [HeaderComponent, NoteFormComponent, MyArchiveComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

}
