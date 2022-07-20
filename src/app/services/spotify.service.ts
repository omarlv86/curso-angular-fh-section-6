import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service listo')
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBGMvto-AThINEuquS4Fy6z3IE3tEufaCi5fe4zoJrd-pHAOU7kYE5vvnglpXHKZ8aeyFrDUyNsX2uCHnyFg2bgttFn_ldb-NyRNllvv1KLvksWYHY'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
