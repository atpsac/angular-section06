import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})

export class ArtistComponent implements OnInit {

  artist: any = { };
  topTracks: any [] = [];

  loading: boolean;

  constructor(

  private router: ActivatedRoute,
  private spotify: SpotifyService

  ) {

  this.loading = true;

  this.router.params.subscribe( params => {
    // console.log( params [ `id` ] );
    this.getArtist( params[ `id` ] );
    this.getTopTracks( params[ `id` ] );
  } );
   }

  ngOnInit() {
  }

  getArtist( id: string ) {

    this.loading = true;

    this.spotify.getArtist(id).
      subscribe( data => {
      // console.log( data );
      this.artist = data;
      this.loading = false;
    } );
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks( id ).
      subscribe( data => {
        // console.log( data );
        this.topTracks = data;
      }
    );
  }


}
