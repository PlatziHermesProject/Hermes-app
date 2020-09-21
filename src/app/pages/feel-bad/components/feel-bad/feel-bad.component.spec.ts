import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelBadComponent } from './feel-bad.component';

describe('FeelBadComponent', () => {
  let component: FeelBadComponent;
  let fixture: ComponentFixture<FeelBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelBadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
