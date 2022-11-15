import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BStarTreePageComponent } from './bstar-tree-page.component';

describe('BStarTreePageComponent', () => {
  let component: BStarTreePageComponent;
  let fixture: ComponentFixture<BStarTreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BStarTreePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BStarTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
