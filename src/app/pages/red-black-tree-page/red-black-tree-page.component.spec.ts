import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBlackTreePageComponent } from './red-black-tree-page.component';

describe('RedBlackTreePageComponent', () => {
  let component: RedBlackTreePageComponent;
  let fixture: ComponentFixture<RedBlackTreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedBlackTreePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedBlackTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
