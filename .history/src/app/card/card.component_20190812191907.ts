import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Update } from './../store/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  value = 6;

  @Input() myValue;

  @Input() set setstore(data) {
    console.log(data);
    if (data) {
      this.store.dispatch(new Update(data));
    }
  }



  constructor(private store: Store<AppState>) {
    // store.select(state => state.myapp).subscribe(res => {
    //   this.value = res;
    // });
    console.log('hi');
    this.store.select('mypp').subscribe(res => {
      console.log(res);

      this.value = res.angular;
    });
  }

  ngOnInit() {
  }

  updateValue() {
    this.value++;
    this.store.dispatch(new Update(this.value));
  }

}


