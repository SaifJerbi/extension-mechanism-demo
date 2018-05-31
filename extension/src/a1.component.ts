import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { pairwise, take } from 'rxjs/operators';

@Component({
  selector: 'comp-a1',
  template: 'I am widget Component A1   <p-button label="Click" ></p-button>'
})
export class ComponentA1 implements OnInit {
  ngOnInit(): void {
    interval(1000)
      .pipe(pairwise(), take(5))
      .subscribe(console.log);
  }
}
