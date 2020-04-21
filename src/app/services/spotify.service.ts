import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  )  { }

getQuery( query: string ) {
  const URL = `https://api.spotify.com/v1/${ query }`;

  const headers = new HttpHeaders({
    Authorization : 'Bearer BQA3T47T_X3XfScAXpcZcE-Bar_A5o37mGzOqi3_5k3bpUAM-Ufe3qPNdDfZ1_-sFE2Dp3PeTRGGnOyF3Oo'
   });

  return this.http.get( URL, { headers } );
}

getNewReleases( ) {

  return this.getQuery( 'browse/new-releases?limit=20' )
          .pipe( map ( data => {
            return data[ `albums` ].items;
          }));
  // .subscribe( data => {
  //  console.log( data );
  // }
  // );
}

getArtists( termino: string ) {

  return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
          .pipe( map ( data => {
            return data[ `artists` ].items;
          }) );

}


getArtist( id: string ) {

  return this.getQuery( `artists/${ id }` );
          // .pipe( map ( data => {
          //  return data[ `artists` ].items;
          // }) );

}

}
