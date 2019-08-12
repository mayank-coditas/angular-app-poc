import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Update } from './../store/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducer';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.scss']
// })
// export class CardComponent implements OnInit {

//   value = 6;

//   @Input() myValue;

//   @Input() set setStore(data) {
//     console.log(data);
//     if (data) {
//       this.store.dispatch(new Update(data));
//     }
//   }

//   constructor(private store: Store<AppState>) {
//     // store.select(state => state.myapp).subscribe(res => {
//     //   this.value = res;
//     // });
//     console.log('hi');
//     this.store.select('mypp').subscribe(res => {
//       console.log(res);

//       this.value = res.value;
//     });
//   }

//   ngOnInit() {
//   }

// }


@Component({
  template: `
    <div class="alert alert-{{ type }} alert-dismissible" *ngIf="show">
      {{ content }} {{value}}
      <button type="button" class="close">
        <span (click)="show = false">&times;</span>
      </button>
    </div>
  `
})
export class AlertComponent implements OnInit {
  @Input() content = '';
  @Input() type = 'success';

  @Input() set setStore(data) {
        console.log(data);
        if (data) {
          this.store.dispatch(new Update(data));
        }
      }

  show = true;
  value = 5;

  ngOnInit() {

  }

  constructor(private store: Store<AppState>) {
        // store.select(state => state.myapp).subscribe(res => {
        //   this.value = res;
        // });
        console.log('hi');
        this.store.select('mypp').subscribe(res => {
          console.log(res);

          this.value = res.value;
        });
      }
}
