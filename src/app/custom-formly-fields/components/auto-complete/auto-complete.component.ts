import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { startWith } from 'rxjs/operators/startWith';
import { filter } from 'rxjs/operators/filter';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';
// import { Field } from '@ngx-formly/core';

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent extends FieldType implements OnInit, OnDestroy {
  onDestroy$ = new Subject<void>();
  search$ = new EventEmitter();
  options$;
  ngOnInit() {
    // super();
    this.options$ = this.search$.pipe(
      takeUntil(this.onDestroy$),
      startWith(''),
      filter(v => v !== null),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(this.to.search$),
    );
    this.options$.subscribe();
    console.log(this.to, '::::3222', this);
    // this.field.templateOptions.serachTerm = function () {
    //   console.log('at the serach');
    // }
  }

  ngOnDestroy() {
    this.onDestroy$.complete();
  }

  clearSelect(evt) {
    this.search$.emit('');
    console.log('clearselect',evt);
  }    
  searchChanges(evt){

    evt = typeof evt == 'string' ? evt : '';
    this.search$.emit(evt);
    console.log('::::blucrchanges',evt);
  }

  searchChanges1(evt) {
    console.log(evt);
    this.search$.emit('');
  }
}
