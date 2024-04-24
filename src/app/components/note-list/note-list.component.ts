import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { CreateNoteService } from '../../create-note-service';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [NgFor, NoteComponent, NgIf],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})


export class NoteListComponent implements OnInit {
  myNotes: MyNote[] | undefined;

  constructor(private createNoteService: CreateNoteService) {}

  ngOnInit() {
    this.createNoteService.myNotes$.subscribe(notes => {
      this.myNotes = notes;
      console.log(notes)
    });
  }
}

export interface MyNote{
  author: string,
  title: string,
  category: string,
  content: string,
}



