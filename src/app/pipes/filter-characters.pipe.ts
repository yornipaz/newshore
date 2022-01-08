import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '@services/interface/character';


@Pipe({
  name: 'filterCharacters',
})
export class FilterCharactersPipe implements PipeTransform {
  transform(
    characters: Character[],
    page: number = 0,
    search: string,
    optionFilter: keyof Character,
  ): Character[] {
    
     
    let filterCharacter = search.length === 0 || optionFilter.includes('Select Filter')?characters:characters.filter((character) => this._capitalizeString(character[optionFilter].toString()).includes(this._capitalizeString(search))
    );

    return filterCharacter.slice(page, page + 12);
  }
   private _capitalizeString(String: string): string {
    if (!String) return String;
    let value = String[0].toUpperCase() + String.slice(1);

    return value;
  }
}
