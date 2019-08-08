import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { SomeBankletModule, SomeBankletComponent } from 'some-banklet';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule,
    SomeBankletModule
  ],
  providers: [],
  entryComponents: [
    SomeBankletComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector ) {
    const someBankletElement = createCustomElement(SomeBankletComponent, { injector: this.injector });
    
    customElements.define('some-banklet', someBankletElement);
  }
  
  ngDoBootstrap() {
  }
 }
