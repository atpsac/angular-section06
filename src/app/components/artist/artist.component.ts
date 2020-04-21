import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  constructor(

  private router: ActivatedRoute,
  private spotify: SpotifyService

  ) {
  this.router.params.subscribe( params => {
    // console.log( params [ `id` ] );
    this.getArtist( params[ `id` ] );
  } );
   }

  ngOnInit() {
  }

  getArtist(id: string) {
    this.spotify.getArtist(id).
      subscribe( data => {
      console.log( data );
    } );
  }

}
