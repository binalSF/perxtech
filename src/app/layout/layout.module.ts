import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { HomeComponent } from "./home/home.component";
import { DirectivesComponent } from "./directives/directives.component";

import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { FormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { HomeService } from "src/services";

import { NavbarComponent } from "../shared/components";

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    DirectivesComponent,
    NavbarComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    LayoutRoutingModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [HomeService],
})
export class LayoutModule {}
