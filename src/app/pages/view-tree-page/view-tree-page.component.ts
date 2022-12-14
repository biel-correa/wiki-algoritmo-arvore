import AlgorithmModel from '@app/models/algorithm.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ALGORITHMS } from '@app/models/algorithms';
import { tap } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  templateUrl: './view-tree-page.component.html',
  styleUrls: ['./view-tree-page.component.scss'],
})
export class ViewTreePageComponent implements OnInit {
  private algorithms = ALGORITHMS;
  private id: number;
  algorithm: AlgorithmModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getAlgorithmById();
  }

  getVideo(): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(this.algorithm?.video || '');
  }

  getAlgorithmById() {
    this.route.params
      .pipe(
        tap({
          next: (params: Params) => {
            this.id = params['id'];
            this.algorithm = this.algorithms.find(
              (algorithm) => algorithm.id == this.id
            );
          },
        })
      )
      .subscribe();
  }
}
