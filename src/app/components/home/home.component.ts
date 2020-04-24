import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newSongs: any [] = [];
  loading: boolean;
  error: boolean;

  constructor(

  private spotify: SpotifyService

  ) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe(( data: any) => {
        // console.log( data );
        this.newSongs = data;
        this.loading = false;
    }, ( errorService ) => {
      this.loading = false;
      console.log( this.error = errorService.error.error.message );
    });

  }


  ngOnInit() {
  }

}
