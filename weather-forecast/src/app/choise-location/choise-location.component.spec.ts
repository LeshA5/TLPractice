import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiseLocationComponent } from './choise-location.component';

describe('ChoiseLocationComponent', () => {
  let component: ChoiseLocationComponent;
  let fixture: ComponentFixture<ChoiseLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiseLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiseLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
