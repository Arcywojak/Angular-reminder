import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NothingFoundPageComponent } from './nothing-found-page.component';

describe('NothingFoundPageComponent', () => {
  let component: NothingFoundPageComponent;
  let fixture: ComponentFixture<NothingFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NothingFoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NothingFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
