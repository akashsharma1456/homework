import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {SuccessAlertComponent} from './SuccessAlert/SuccessAlert.component';
import {WarningAlertComponent} from './WarningAlert/WarningAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
