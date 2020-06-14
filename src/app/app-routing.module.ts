import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BrewComponent } from "./brew/brew.component";
import { RoastComponent } from "./roast/roast.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'brew', component: BrewComponent },
    { path: 'roast', component: RoastComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
