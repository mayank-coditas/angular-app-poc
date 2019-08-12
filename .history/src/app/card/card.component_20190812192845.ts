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
  state: any = {};

  @Input() set setstore(data) {
    console.log(JSON.parse(data));
    if (data) {
      this.store.dispatch(new Update(JSON.parse(data)));
    }
  }

  constructor(private store: Store<AppState>) {
    this.store.select('mypp').subscribe(res => {
      console.log(res);
      this.state = res;
    });
  }

  ngOnInit() {
  }

  updateValue() {
    this.state.angular++;
    this.store.dispatch(new Update(this.state));
  }

}


