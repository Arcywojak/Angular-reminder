import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageOfContactAnotherComponent } from './subpage-of-contact-another.component';

describe('SubpageOfContactAnotherComponent', () => {
  let component: SubpageOfContactAnotherComponent;
  let fixture: ComponentFixture<SubpageOfContactAnotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageOfContactAnotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageOfContactAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
