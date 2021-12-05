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
    optionFilter: string
  ): Character[] {
    
    let queryCapitalize = this.capitalizeString(search);
    if (search.length === 0 || optionFilter==='Select Filter') {
      return characters.slice(page, page + 12);
    }
    
    let filterCharacter = characters.filter(data => {
   
      if (optionFilter === 'firstName') {
    
        return data['firstName'].includes(queryCapitalize);
      }
      if (optionFilter === 'species') {
        return data['species'].includes(search);
      }
      if (optionFilter === 'patronus') {
        return data['patronus'].includes(search);
      }
      if (optionFilter === 'ancestry') {
        return data['ancestry'].includes(search);
      }
      if (optionFilter === 'gender') {
        return data['gender'].includes(search);
      }
      if (optionFilter === 'hairColour') {
        return data['hairColour'].includes(search);
      }
      if (optionFilter === 'yearOfBirth') {
        return String(data['yearOfBirth']).includes(search);
      }
      if (optionFilter === 'lastName') {
          
       
        return data['lastName']===queryCapitalize;
      }
    });

    return filterCharacter.slice(page, page + 12);
  }
  capitalizeString(String: string): string {
    if (!String) return String;
    let value = String[0].toUpperCase() + String.slice(1);

    return value;
  }
}
