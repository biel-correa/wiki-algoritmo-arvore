import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPlusTreePageComponent } from './bplus-tree-page.component';

describe('BPlusTreePageComponent', () => {
  let component: BPlusTreePageComponent;
  let fixture: ComponentFixture<BPlusTreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPlusTreePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BPlusTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
