import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';


const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule 
]

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule { }
