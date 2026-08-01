import chroma from "chroma-js";
export declare function generateColorsMap(color: string): {
    baseColorIndex: number;
    colors: chroma.Color[];
};
/**
 * Generates 10 colors between two given colors.
 * @param {string} start - The first color in any Chroma.js compatible format.
 * @param {string} end - The second color in any Chroma.js compatible format.
 * @returns {string[]} An array of 10 color strings in hexadecimal format.
 */
export declare function generateIntermediateColors(start: string, end: string): string[];
export type ColorsTuple = readonly [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    ...string[]
];
export declare function generateColors(color: string): ColorsTuple;
