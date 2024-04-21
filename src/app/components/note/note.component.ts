import { Component, Input } from '@angular/core';
import { MyNote } from '../note-list/note-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [NgIf],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent{
  @Input() note?: MyNote

}
