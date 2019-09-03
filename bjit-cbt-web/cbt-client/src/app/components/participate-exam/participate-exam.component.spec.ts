import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateExamComponent } from './participate-exam.component';

describe('ParticipateExamComponent', () => {
  let component: ParticipateExamComponent;
  let fixture: ComponentFixture<ParticipateExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipateExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
