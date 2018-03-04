import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatDialogModule],
    exports: [MatButtonModule, MatCheckboxModule, MatDialogModule]
})
export class MaterialModule {
}
