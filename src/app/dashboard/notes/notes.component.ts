import { Component, OnInit } from '@angular/core';

import { Notes } from '../../shared/notes.model';
import { NotesService } from '../../services/notes.service';

@Component({
  templateUrl: 'notes.component.html',
})
export class NotesComponent implements OnInit {
  notes: Notes[];

  constructor(private notesService: NotesService) {  }

  ngOnInit() {
    this.notesService.get().then(data => {
      this.notes = data;
    });
  }
}
