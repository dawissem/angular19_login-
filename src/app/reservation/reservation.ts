export interface Reservation {
    id?: number;  
    dateRetour: string;  
    dateAnnulation?: string;  
    dateReservation: string; 
    utilisateur: {
      id: number;
      name?: string | null;
      prenom?: string | null;
      cin?: string | null;
      login: string;
      password: string;
      role?: string | null;
    };
    livre: {
      id: number;
      titre: string;
      isbn: string;
      dateEdition: string;  
      categorie: string;  
    };
  }
  