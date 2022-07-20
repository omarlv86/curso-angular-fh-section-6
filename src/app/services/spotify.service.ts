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
      'Authorization':'Bearer BQD3L3bGY-9RNAccVHlfIyueCNQio0RnWYinGZlp88Uvu73XjuNpG95fcO9nKPyIh1aOQbm-CiY_Whvk9o0dgT8FmE6b8TfsL2CjZP5pUbACv9M8TQE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }

  getArtista( termino: string ){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQD3L3bGY-9RNAccVHlfIyueCNQio0RnWYinGZlp88Uvu73XjuNpG95fcO9nKPyIh1aOQbm-CiY_Whvk9o0dgT8FmE6b8TfsL2CjZP5pUbACv9M8TQE'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}
