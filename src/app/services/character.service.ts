import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { Character } from './interface/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  getCharacters(endpoint: string): Observable<Character[]> {
    const endpointPath:string = `${environment.baseUrlApi}${endpoint}`;
    return this.http.get<Character[]>(endpointPath);
  }
  capitalizeString(String: string): string {
    if (!String) return String;
    let value = String[0].toUpperCase() + String.slice(1)
   
    return value;
  }
  filterCharacterByQuery(query: string,characters:Array<Character>): Array<Character> {

    let queryCapitalize = this.capitalizeString(query)
    let filterCharacter = characters.filter(data => data.name.split(" ")[0] === queryCapitalize
      || data.name.split(" ")[1] === queryCapitalize || data.eyeColour === query
    )
    return filterCharacter;
  }
}
