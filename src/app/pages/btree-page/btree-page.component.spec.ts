import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTreePageComponent } from './btree-page.component';

describe('BTreePageComponent', () => {
  let component: BTreePageComponent;
  let fixture: ComponentFixture<BTreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTreePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
