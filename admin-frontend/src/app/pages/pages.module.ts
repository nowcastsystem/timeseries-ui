import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { EmileModule } from './emile/emile.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NgxUploaderModule } from 'ngx-uploader';
import { UploaderComponent } from './uploader/uploader.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    EmileModule,
    MiscellaneousModule,
    NgxUploaderModule,
  ],
  declarations: [
    PagesComponent,
    UploaderComponent,
  ],
})
export class PagesModule {
}
