import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThecrewComponent } from './thecrew.component';

describe('ThecrewComponent', () => {
  let component: ThecrewComponent;
  let fixture: ComponentFixture<ThecrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThecrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThecrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
