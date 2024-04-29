import { Injectable } from '@angular/core';
import { MyNote } from './components/note-list/note-list.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CreateNoteService {
  private myNotesSubject = new BehaviorSubject<MyNote[]>([
    {
      author: 'Alice',
      title: 'First Note',
      category: 'Personal',
      content: 'This is my first note!'
    },
    {
      author: 'Bob',
      title: 'Second Note',
      category: 'Work',
      content: 'This is my second note!'
    },
  ]);
  myNotes$ = this.myNotesSubject.asObservable();

  private archivedNotesSubject = new BehaviorSubject<MyNote[]>([]);
  archivedNotes$ = this.archivedNotesSubject.asObservable()

  addNote(note: MyNote) {
    const updatedNotes = [...this.myNotesSubject.getValue(), note];
    this.myNotesSubject.next(updatedNotes);
  }

  deleteNote(index: number) {
    const currentNotes = this.myNotesSubject.getValue();
    currentNotes.splice(index, 1);
    this.myNotesSubject.next(currentNotes);
  }

  archiveNote(index: number, note: MyNote) {
    const archivedNotes = [...this.archivedNotesSubject.getValue(), note];
    this.archivedNotesSubject.next(archivedNotes);
    this.deleteNote(index)
  }
}
