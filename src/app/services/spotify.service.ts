import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service listo')
  }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCiVF1TQFa7_ZqNjAtcSo0lWiyuja9s9ff3MAgPtnRTpT8QXM5DoZfdEM9DuEi0Rm3IuuwX9PS_qlEvBCJHW71I_HPdO5Cv68lq0lw8o5H7VmmI1uM'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
            .pipe( map( (data:any) => data.albums.items) )

  }

  getArtista( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map(( data:any ) => data.artists.items ) )
  }
}
