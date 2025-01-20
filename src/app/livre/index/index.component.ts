import { AfterViewInit, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LivreService } from '../livre.service';
import { Livre } from '../livre';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { ViewLivreComponent } from '../view/view.component';
import { EditComponent } from '../edit/edit.component';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule ,
    SidebarComponent,ViewLivreComponent,EditComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'] // Corrected to `styleUrls`
})
export class IndexComponent    {
 
  


  livres: Livre[] = [];
  filteredLivres: Livre[] = [];
  searchTitre: string = '';
  searchIsbn: string = '';
  searchCategorie: any = '';
  categories: string[] = [
    'ACTION',
    'ROMANCE',
    'HISTORIQUE',
    'THRILLER',
    'HORROR',
    'ART_ET_CULTURE',
    'TECHNOLOGIE',
    'SCIENCE',
    'SCIENCE_FICTION'
  ];

  constructor(public livreService: LivreService,
    private  router: Router
  ) { }
  navigateToCreate(): void {
    this.router.navigate(['/dashboard/livre/create']);
  }
  /**
   * Fetch all Livres on component initialization
   */
  ngOnInit(): void {
    this.livreService.getAll().subscribe(
      (data: Livre[]) => {
        console.log('Fetched livres:', data);
        this.livres = data;
        this.filteredLivres = data; 
      },
      (error) => {
        console.error('Error fetching livres:', error);
      }
    );
  }
  
  
  onSearch(): void {
    this.filteredLivres = this.livres.filter(livre =>
      (this.searchTitre ? livre.titre.toLowerCase().includes(this.searchTitre.toLowerCase()) : true) &&
      (this.searchIsbn ? livre.isbn.toLowerCase().includes(this.searchIsbn.toLowerCase()) : true) &&
      (this.searchCategorie ? livre.categorie.toLowerCase().includes(this.searchCategorie.toLowerCase()) : true)
    );
  }
  /**
   * Delete a Livre by ID
   * 
   * @param id number
   */
  deleteLivre(id: number): void {
    this.livreService.delete(id).subscribe(res => {
      this.livres = this.livres.filter(item => item.id !== id);
      console.log('Livre deleted successfully!');
    });
  }
}
