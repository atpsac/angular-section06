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
    Authorization : 'Bearer BQDV1iohVpKwgVSgJOoaBjpb6lwY2shbvcOm-Qq7siN1SzRxl8a803obIVQzdKOGqJCBtmDOZS2zgEXK3Ho'
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


getTopTracks( id: string ) {

  return this.getQuery( `artists/${ id }/top-tracks/?country=us` )
        .pipe( map ( data => {
          return data[ `tracks` ];
          }) );
}

}
