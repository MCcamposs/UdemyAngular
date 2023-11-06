import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

  mockCover: any = {
    cover: 'https://tse2.mm.bing.net/th/id/OIP.8MqFT4QnFXnR6rO2q0iOCgHaE8?pid=ImgDet&rs=1',
    name: 'BEBE (oficial)',
    album: 'gioli y assia',
  }
}
