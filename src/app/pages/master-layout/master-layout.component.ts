import { Component } from '@angular/core';
import { Observable, Subject, map, shareReplay, takeUntil } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent {
  onDestroy$: Subject<void> = new Subject();
  showFiller = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(takeUntil(this.onDestroy$)
      , map((result: { matches: any; }) => result.matches),
      shareReplay()
    );

  userMenu: any[] = [];
  constructor(private breakpointObserver: BreakpointObserver,
    ) {
    
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
