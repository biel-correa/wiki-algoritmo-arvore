import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTreePageComponent } from './view-tree-page.component';

describe('ViewTreePageComponent', () => {
  let component: ViewTreePageComponent;
  let fixture: ComponentFixture<ViewTreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTreePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
