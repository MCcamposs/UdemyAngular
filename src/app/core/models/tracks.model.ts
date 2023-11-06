/* Exportamos los tipos de datos que usaremos para las canciones */
import { ArtistModel } from "./artist.model";

export interface TrackModel{
    name: string,
    album: string,
    cover: string,
    duration: number,
    url: string,
    _id: string | number,
    artist?: ArtistModel;  /* el modelo lo hacemos nosotros */
}