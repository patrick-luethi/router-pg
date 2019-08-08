import { NgModule } from '@angular/core';
import { SomeBankletComponent } from './some-banklet.component';
import { RouterModule, Router } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';

@NgModule({
  declarations: [SomeBankletComponent, Page2Component, Page1Component],
  imports: [
    RouterModule.forRoot([
      {
        path: "page1",
        component: Page1Component
      },
      {
        path: "page2",
        component: Page2Component
      }
    ])
  ],
  exports: [SomeBankletComponent]
})
export class SomeBankletModule {
  constructor(private router: Router) {
    this.router.navigate(["page1"], { skipLocationChange: true });
  }
}
