import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ViewTreePageComponent } from './view-tree-page.component';

describe('ViewTreePageComponent', () => {
  let component: ViewTreePageComponent;
  let fixture: ComponentFixture<ViewTreePageComponent>;

  const activatedRouteMock = {
    params: of({ id: 1 }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTreePageComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
