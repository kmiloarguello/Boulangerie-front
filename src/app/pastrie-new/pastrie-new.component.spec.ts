import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrieNewComponent } from './pastrie-new.component';

describe('PastrieNewComponent', () => {
  let component: PastrieNewComponent;
  let fixture: ComponentFixture<PastrieNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastrieNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastrieNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
