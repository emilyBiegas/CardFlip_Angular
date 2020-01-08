import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RedComponent } from "./red/red.component";
import { SeventiesComponent } from "./seventies/seventies.component";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
  { path: "homepage", component: HomepageComponent },
  { path: "seventies", component: SeventiesComponent },
  { path: "red", component: RedComponent },
  { path: "", redirectTo: "/homepage", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
