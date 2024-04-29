import { Component, Input } from '@angular/core';
import { MyNote } from '../note-list/note-list.component';
import { NgIf } from '@angular/common';
import { CreateNoteService } from '../../create-note-service';
import { take } from 'rxjs';



@Component({
  selector: 'app-note',
  standalone: true,
  imports: [NgIf],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent{
  @Input() note?: MyNote


  constructor(private createNoteService: CreateNoteService) { }


  removeNote(): void {
    if (this.note) {
        this.createNoteService.myNotes$.pipe(take(1)).subscribe(notes => {
            const index = notes.indexOf(this.note!);
            if (index !== -1) {
                this.createNoteService.deleteNote(index);
            }
        });
    }
  }



  archiveNote(): void {
    if (this.note) {
      this.createNoteService.myNotes$.pipe(take(1)).subscribe(notes => {
          const index = notes.indexOf(this.note!);
          if (index !== -1) {
            this.createNoteService.archiveNote(index, this.note!);
          }
      });
  }
    
  }

}
