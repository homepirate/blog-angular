import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateNoteService } from '../../create-note-service';
import { MyNote } from '../note-list/note-list.component';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent {
  note =  new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    category: new FormControl(''),
    content: new FormControl('')
    });

    constructor(private createNoteService: CreateNoteService) {}

    onSubmit() {
      if (this.note.valid) {
        const noteData = Object.assign({}, this.note.value) as MyNote;
        this.createNoteService.addNote(noteData);
        console.log(this.createNoteService.myNotes$);
      } else {
        console.error('Form is not valid');
      }
    }
}


