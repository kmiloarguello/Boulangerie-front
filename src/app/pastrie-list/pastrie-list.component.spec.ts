import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrieListComponent } from './pastrie-list.component';

describe('PastrieListComponent', () => {
  let component: PastrieListComponent;
  let fixture: ComponentFixture<PastrieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastrieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastrieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
