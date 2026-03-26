import { Directions, Icons } from "../enum/enum";

function validateCoordinate(coordinate : string, range : number) {
    let errorMessage = '';
    const x = Number(coordinate.split(',')[0].trim());
    const y = Number(coordinate.split(',')[1].trim());

    if (x < 0 || y < 0 || x >= range || y >= range) {
        errorMessage = 'Coordinate must be between 0 and ' + ( range-1 ) + '.';
    }

    return errorMessage;
}

function validateDirection(direction : string) {
    let errorMessage = '';
    if (!Object.values(Directions).includes(direction)) {
        errorMessage = 'The provided Direction is invalid.';
    }

    return errorMessage;
}

export function validateAndFormatInput(input : string, range : number) {
    let formattedInput = '';
    let cleanInput = '';
    let coordinate = '';
    let direction = '';
    let errorMessage = '';
    let coordinateError = '';
    let directionError = '';
    const inpuText = input.toUpperCase();
    const inputRegex = /^\d+,\s*\d+ \w+$/gm;

    if (inputRegex.test(inpuText)) {
        cleanInput = inpuText.trim().replace(', ', ',');
        coordinate = cleanInput.split(' ')[0].trim();
        direction = cleanInput.split(' ')[1].trim();

        coordinateError = validateCoordinate(coordinate, range);
        directionError = validateDirection(direction);

        errorMessage = coordinateError ? coordinateError : directionError;
    }
    else {
        errorMessage = inpuText ? 'Input is in invalid format.' : 'Please input before you proceed.';
    }

    formattedInput = coordinate + ' ' + direction;

    return { errorMessage, formattedInput }
}

export type DirectionKey = keyof typeof Icons;

export const getIcon = (direction: DirectionKey) => {
  return Icons[direction];
};