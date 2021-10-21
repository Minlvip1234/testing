import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { calculator } from "./calculator.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    bootstrap: [calculator],
    declarations: [calculator]
})
export class AppModule{}