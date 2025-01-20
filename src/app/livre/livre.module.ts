import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
 import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ViewLivreComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,SidebarComponent,RouterLink,ViewLivreComponent,EditComponent,IndexComponent ,FormsModule 
  ]
})
export class LivreModule { }
