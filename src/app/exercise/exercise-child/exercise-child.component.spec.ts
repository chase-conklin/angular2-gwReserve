import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseChildComponent } from './exercise-child.component';

describe('ExerciseChildComponent', () => {
  let component: ExerciseChildComponent;
  let fixture: ComponentFixture<ExerciseChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
