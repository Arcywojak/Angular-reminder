import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { Tutorial } from '../../../../models/tutorial.model';
import * as TutorialActions from '../../../../actions/tutorial.actions';

@Component({
  selector: 'app-create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.scss']
})
export class CreateTutorialComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  public addTutorial(name: string, url: string) {
    this.store.dispatch(new TutorialActions.AddTutorial({name, url}));
  }

  ngOnInit(): void {
  }

}
