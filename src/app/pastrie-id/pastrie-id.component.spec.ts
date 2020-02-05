import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrieIdComponent } from './pastrie-id.component';

describe('PastrieIdComponent', () => {
  let component: PastrieIdComponent;
  let fixture: ComponentFixture<PastrieIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastrieIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastrieIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
