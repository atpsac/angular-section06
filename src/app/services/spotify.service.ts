import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  )  { }

getNewReleases() {

  const headers = new HttpHeaders({
    Authorization : 'Bearer BQAapkDHLdrFESQUSSJMwo4emuqPzdI3ky0naGOOYyhL3bsDv3I7_gQ2b6RCgeyenA2LoDPeCGEiwrvVSnY'
   });

  this.http.get( 'https://api.spotify.com/v1/browse/new-releases', { headers } )
  .subscribe( data => {
    console.log( data );
  } );
}

}
