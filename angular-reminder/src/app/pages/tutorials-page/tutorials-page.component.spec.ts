import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsPageComponent } from './tutorials-page.component';

describe('TutorialsPageComponent', () => {
  let component: TutorialsPageComponent;
  let fixture: ComponentFixture<TutorialsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
