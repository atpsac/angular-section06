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
    Authorization : 'Bearer BQAvOtjzhCD20HCKdg9Yr3FDID4Xl70wYvb7Lv-_S6zDXfkLw-7dX-y-e6gNj_VwxGOvP4vXDeekdtJgRwQ'
   });

  return this.http.get( 'https://api.spotify.com/v1/browse/new-releases', { headers } );
  // .subscribe( data => {
  //  console.log( data );
  // }
  // );
}

getArtist( termino: string ) {
  const headers = new HttpHeaders({
    Authorization : 'Bearer BQCvAUbR_pGHgI49j7uNu5J4bpvWgGFVFxOlDBhXCtD_l3h_HsRNWtF_esEVJ8iq9m_OdJHPO467N5EAiyY'
  });

  return this.http.get( `https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15` , { headers } );

}

}
