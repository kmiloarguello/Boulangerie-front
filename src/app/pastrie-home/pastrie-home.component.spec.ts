import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrieHomeComponent } from './pastrie-home.component';

describe('PastrieHomeComponent', () => {
  let component: PastrieHomeComponent;
  let fixture: ComponentFixture<PastrieHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastrieHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastrieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
