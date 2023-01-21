import { ALGORITHMS } from './../../models/algorithms';
import { ComponentsModule } from './../../components/components.module';
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
      imports: [ComponentsModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should render algorithm', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      ALGORITHMS[0].title
    );
    expect(compiled.querySelectorAll('app-section p')[0].innerText).toContain(
      ALGORITHMS[0].description
    );
    expect(compiled.querySelectorAll('app-section p')[1].innerText).toContain(
      ALGORITHMS[0].utilization
    );
    console.log(compiled.querySelectorAll('app-section .video')[0].innerHTML);
    expect(
      compiled.querySelectorAll('app-section .video')[0].innerHTML
    ).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getAlgorithmById', () => {
      const spy = spyOn(component, 'getAlgorithmById');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getVideo', () => {
    it('should return iframe with video', () => {
      component.algorithm = {
        id: 1,
        title: 'Lorem',
        description: 'Lorem',
        utilization: 'Lorem',
        video:
          '<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" src="https://www.youtube.com/embed/oxTVYaKGg2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      };

      const video = component.getVideo();

      expect(video).toBeTruthy();
    });

    it('should return empty string', () => {
      component.algorithm = {
        id: 1,
        title: 'Lorem',
        description: 'Lorem',
        utilization: 'Lorem',
      };

      const video = component.getVideo();

      expect(video).toBeTruthy();
    });
  });

  describe('getAlgorithmById', () => {
    it('should set algorithm', () => {
      component.getAlgorithmById();
      expect(component.algorithm).toBeTruthy();
      expect(component.algorithm).toEqual(ALGORITHMS[0]);
    });
  });
});
