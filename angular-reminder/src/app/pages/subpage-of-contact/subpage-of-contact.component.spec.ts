import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageOfContactComponent } from './subpage-of-contact.component';

describe('SubpageOfContactComponent', () => {
  let component: SubpageOfContactComponent;
  let fixture: ComponentFixture<SubpageOfContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageOfContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageOfContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
