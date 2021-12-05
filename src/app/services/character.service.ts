import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from './interface/character';
import { CharacterRequest } from './interface/character-request';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}
  getCharacters(endpoint: string): Observable<Character[]> {
    const endpointPath: string = `${environment.baseUrlApi}${endpoint}`;
    return this.http
      .get<CharacterRequest[]>(endpointPath)
      .pipe(map(this.transformCharacters));

    
  }
  capitalizeString(String: string): string {
    if (!String) return String;
    let value = String[0].toUpperCase() + String.slice(1);

    return value;
  }
/**  filterCharacterByQuery(
    query: string,
    characters: Array<Character>
  ): Array<Character> {
    let queryCapitalize = this.capitalizeString(query);
    let filterCharacter = characters.filter(
      (data) =>
        data.name.split(' ')[0].includes(queryCapitalize)  ||
        data.name.split(' ')[1].includes(queryCapitalize)  ||
        data.eyeColour.includes(query) 
    );
    return filterCharacter;
  } */
  private transformCharacters(
    characters: Array<CharacterRequest>
  ): Array<Character> {
    let charactersTransform: Array<Character> = characters.map((character) => {
      return {
        firstName: character.name.split(' ')[0],
        lastName: character.name.split(' ')[1],
        alive: character.alive,
        ancestry: character.ancestry,
        eyeColour: character.eyeColour,
        gender: character.gender,
        hairColour: character.hairColour,
        image: character.image,
        patronus: character.patronus,
        species: character.species,
        yearOfBirth: character.yearOfBirth,
      };
    });
    return charactersTransform;
  }
}
