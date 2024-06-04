// Define a type for identity colors with a single option 'primary'
type Identity = 'primary';

// Define the color palette for identity with 'primary' color
export const identity: Record<Identity, string> = {
  primary: '#DC0A2D', // The primary color for identity
};

// Define a type for Pokemon types with various options representing different Pokemon types
type PokemonType =
  | 'Bug'
  | 'Dark'
  | 'Dragon'
  | 'Electric'
  | 'Fairy'
  | 'Fighting'
  | 'Fire'
  | 'Flying'
  | 'Ghost'
  | 'Normal'
  | 'Grass'
  | 'Ground'
  | 'Ice'
  | 'Poison'
  | 'Psychic'
  | 'Rock'
  | 'Steel'
  | 'Water';

// Define the color palette for Pokemon types
export const pokemonType: Record<PokemonType, string> = {
  Bug: '#A7B723', // Color for Bug type
  Dark: '#75574C', // Color for Dark type
  Dragon: '#7037FF', // Color for Dragon type
  Electric: '#F9CF30', // Color for Electric type
  Fairy: '#E69EAC', // Color for Fairy type
  Fighting: '#C12239', // Color for Fighting type
  Fire: '#F57D31', // Color for Fire type
  Flying: '#A891EC', // Color for Flying type
  Ghost: '#70559B', // Color for Ghost type
  Normal: '#AAA67F', // Color for Normal type
  Grass: '#74CB48', // Color for Grass type
  Ground: '#DEC16B', // Color for Ground type
  Ice: '#9AD6DF', // Color for Ice type
  Poison: '#A43E9E', // Color for Poison type
  Psychic: '#FB5584', // Color for Psychic type
  Rock: '#B69E31', // Color for Rock type
  Steel: '#B7B9D0', // Color for Steel type
  Water: '#6493EB', // Color for Water type
};

// Define a type for grayscale color options
type GrayScale = 'Dark' | 'Medium' | 'Light' | 'Background' | 'White';

// Define the color palette for grayscale colors
export const grayScale: Record<GrayScale, string> = {
  Dark: '#212121', // Dark grayscale color
  Medium: '#666666', // Medium grayscale color
  Light: '#E0E0E0', // Light grayscale color
  Background: '#EFEFEF', // Background grayscale color
  White: '#FFFFFF', // White color
};
