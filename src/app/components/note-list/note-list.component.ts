import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [NgFor, NoteComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent {
  myNotes: MyNote[] = MyNotes;

}

export const MyNotes: MyNote[] = [
  {author: 'first',
    title: 'first',
    category: 'first',
    content: 'first',
  },
  {
    author: 'second',
    title: 'second',
    category: 'second',
    content: 'second',
  },
  {
    author: 'third',
    title: 'third',
    category: 'third',
    content: 'third',
  }
]

export interface MyNote{
  author: string,
  title: string,
  category: string,
  content: string,
}