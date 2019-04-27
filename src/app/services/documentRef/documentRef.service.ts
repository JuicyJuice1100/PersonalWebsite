import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()

export class DocumentRefService {
  constructor(@Inject(DOCUMENT) private document: any) {}

  get nativeElement(): any {
    return this.document;
  }

  get bodyWidth(): any {
    return this.document.body.clientWidth;
  }
}
