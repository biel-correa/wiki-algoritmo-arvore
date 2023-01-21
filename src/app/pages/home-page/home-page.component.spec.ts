import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../../components/components.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ALGORITHMS } from '@app/models/algorithms';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [ComponentsModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all algorithms', () => {
    const algorithms = ALGORITHMS;
    expect(component.algorithms).toEqual(algorithms);
  });

  describe('Home section', () => {
    it('should have a section component', () => {
      const section = fixture.nativeElement.querySelector('app-section');
      expect(section).toBeTruthy();
    });

    it('should have Algoritmos as title', () => {
      const title = fixture.nativeElement.querySelector('app-section h3');
      expect(title.textContent).toEqual('Algoritmos');
    });
  });

  describe('List algorithms', () => {
    it('should show all algorithms', () => {
      const list = fixture.nativeElement.querySelectorAll('app-algorithm-card');
      expect(list).toBeTruthy();
      expect(list.length).toEqual(component.algorithms.length);
    });
  });
});
