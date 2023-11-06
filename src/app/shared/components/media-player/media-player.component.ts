import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

  mockCover: TrackModel = { /* mocjover tiene que cumplir con el trackModel */
    cover: 'https://tse2.mm.bing.net/th/id/OIP.8MqFT4QnFXnR6rO2q0iOCgHaE8?pid=ImgDet&rs=1',
    name: 'BEBE (oficial)',
    album: 'gioli y assia',
    url: 'http://localhost:4200/tracks.mp3',
    _id: 1 ,
    duration: 3,
  }
}
