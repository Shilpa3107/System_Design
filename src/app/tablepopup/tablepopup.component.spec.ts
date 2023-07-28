import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepopupComponent } from './tablepopup.component';

describe('TablepopupComponent', () => {
  let component: TablepopupComponent;
  let fixture: ComponentFixture<TablepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablepopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
