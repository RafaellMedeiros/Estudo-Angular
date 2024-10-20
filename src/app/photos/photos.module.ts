import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [PhotoComponent],
    exports: [PhotoComponent, CommonModule]
})
export class PhotosModule {
}