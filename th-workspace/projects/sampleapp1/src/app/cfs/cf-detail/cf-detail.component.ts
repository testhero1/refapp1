import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CF } from '../cf';
import { CFService } from '../cf.service';

@Component({
  selector: 'app-cf-detail',
  templateUrl: './cf-detail.component.html',
  styleUrls: ['./cf-detail.component.scss']
})
export class CfDetailComponent implements OnInit {
  
  cf$: Observable<CF>;
  
  
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: CFService
  ) {}
  
  ngOnInit() {
      this.cf$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.service.getCf(params.get('id')))
      );
  }
  
  gotoCFList(cf: CF){
      let cfId =   cf? cf.id : null;        
      this.router.navigate(['/cfs', {id: cfId, foo: 'foo'}]);
  }
}
