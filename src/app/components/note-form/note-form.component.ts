// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-note-form',
//     templateUrl: './note-form.component.html',
//   styleUrls: ['./note-form.component.scss']
// })

// export class NoteFormComponent {
//   note = {
//     author: '',
//     title: '',
//     category: '',
//     content: ''
//   };

//   onSubmit() {
//     console.log(this.note);
//   }
// }


import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; // Импортируйте ReactiveFormsModule здесь

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


  onSubmit() {
    console.log(this.note.value); // Получите значения формы
  }
}


