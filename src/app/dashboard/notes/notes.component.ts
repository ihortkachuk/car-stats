import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { Notes } from '../../shared/notes.model';
import { NotesService } from '../../services/notes.service';

@Component({
  templateUrl: 'notes.component.html',
})
export class NotesComponent implements OnInit {
  notes: any;

  constructor(private notesService: NotesService) {  }

  ngOnInit() {
    this.notesService.get().then(data => {
      this.notes = data;
    });
  }

  delete(id: number): void {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
    }).then(() => {
      this.notesService.delete(id).then(() => {
        this.notes.notes = this.notes.notes.filter((item: Notes) => item.id !== id);
        swal(
          'Deleted!',
          'Your note has been deleted.',
          'success'
        );
      });
    });
  }
}
