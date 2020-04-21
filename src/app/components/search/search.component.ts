import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any [] = [];
  loading: boolean;

  constructor(
    private spotify: SpotifyService
    ) {

    }

  buscar( termino: string ) {
    this.spotify.getArtists( termino )
      .subscribe( (data: any ) => {
        console.log( data );
        this.artists = data;
        this.loading = false;
      } );
  }

  ngOnInit() {
  }

}
