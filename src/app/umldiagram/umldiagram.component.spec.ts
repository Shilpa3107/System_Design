import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmldiagramComponent } from './umldiagram.component';

describe('UmldiagramComponent', () => {
  let component: UmldiagramComponent;
  let fixture: ComponentFixture<UmldiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmldiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmldiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
