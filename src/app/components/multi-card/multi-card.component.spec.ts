import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCardComponent } from './multi-card.component';

describe('MultiCardComponent', () => {
  let component: MultiCardComponent;
  let fixture: ComponentFixture<MultiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
