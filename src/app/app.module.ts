import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopNavbarComponent } from './Components/shop-navbar/shop-navbar.component';
import { ShopSidebarComponent } from './Components/shop-sidebar/shop-sidebar.component';
import { ShopItemsComponent } from './Components/shop-items/shop-items.component';
import { ShopFooterComponent } from './Components/shop-footer/shop-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopNavbarComponent,
    ShopSidebarComponent,
    ShopItemsComponent,
    ShopFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
