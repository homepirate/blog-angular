import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgFor } from '@angular/common';
import { MyNote } from '../note-list/note-list.component';
import { CreateNoteService } from '../../create-note-service';

@Component({
  selector: 'app-my-archive',
  standalone: true,
  imports: [HeaderComponent, NgFor],
  templateUrl: './my-archive.component.html',
  styleUrl: './my-archive.component.scss'
})
export class MyArchiveComponent implements OnInit {
  archiveNotes: MyNote[] | undefined;

  constructor(private createNoteService: CreateNoteService) {}

  ngOnInit() {
    this.createNoteService.archivedNotes$.subscribe(notes => {
      this.archiveNotes = notes;
      console.log(notes)
    });
  }
}
