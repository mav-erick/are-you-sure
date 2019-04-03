import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AysComponent } from "./ays/ays.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [AysComponent],
  imports: [BrowserModule],
  entryComponents: [AysComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const ays = createCustomElement(AysComponent, { injector });
    customElements.define("ays-button", ays);
  }

  ngDoBootstrap() {}
}
