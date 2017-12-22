import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeeComponent } from './about-mee.component';

describe('AboutMeeComponent', () => {
  let component: AboutMeeComponent;
  let fixture: ComponentFixture<AboutMeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
