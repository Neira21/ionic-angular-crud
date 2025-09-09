import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo',
})
export class DemoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    let result = '';
    let letterIndex = 0; // Contador solo para letras (sin espacios)

    // 1era forma - Loop tradicional con contador de letras
    // for (let i = 0; i < value.length; i++) {
    //   const char = value[i];
    //   if (char === ' ') {
    //     result += char;
    //   } else {
    //     if (letterIndex % 2 === 0) {
    //       result += char.toUpperCase();
    //     } else {
    //       result += char.toLowerCase();
    //     }
    //     letterIndex++;
    //   }
    // }
    // return result;

    // 2da forma - Split por palabras y transformar cada palabra independiente
    const array = value.split(' ');
    array.forEach((word, index) => {
      let transformedWord = '';
      for (let i = 0; i < word.length; i++) {
        transformedWord +=
          i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
      }
      array[index] = transformedWord;
    });
    return array.join(' ');

    // 3era forma - Array.from() con map() y contador externo
    // let letterIndex = 0;
    // return Array.from(value).map(char => {
    //   if (char === ' ') return char;
    //   const result = letterIndex % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    //   letterIndex++;
    //   return result;
    // }).join('');

    // 4ta forma - Spread operator con reduce()
    // return [...value].reduce((acc, char, index) => {
    //   if (char === ' ') return acc + char;
    //   const letterCount = [...value.substring(0, index)].filter(c => c !== ' ').length;
    //   return acc + (letterCount % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
    // }, '');

    // 5ta forma - Replace con regex y función callback
    // let letterIndex = 0;
    // return value.replace(/./g, (char) => {
    //   if (char === ' ') return char;
    //   const result = letterIndex % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    //   letterIndex++;
    //   return result;
    // });

    // 6ta forma - Split, filter, map y reconstruir (más funcional)
    // const letters = value.split('').filter(char => char !== ' ');
    // const transformedLetters = letters.map((char, index) =>
    //   index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    // );
    // let letterIndex = 0;
    // return value.split('').map(char =>
    //   char === ' ' ? char : transformedLetters[letterIndex++]
    // ).join('');

    // 7ma forma - One-liner con split y map (más conciso)
    // return value.split(' ').map(word =>
    //   [...word].map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')
    // ).join(' ');

    // 8va forma - For...of loop (más legible)
    // let result = '';
    // let letterIndex = 0;
    // for (const char of value) {
    //   if (char === ' ') {
    //     result += char;
    //   } else {
    //     result += letterIndex % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    //     letterIndex++;
    //   }
    // }
    // return result;
  }
}
