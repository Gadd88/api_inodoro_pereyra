import { Character } from "../models/character";
import * as fs from 'fs'
import * as path from 'path'

export class CharacterService{
    private characters: Character[]
    
    constructor(){
        this.characters = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/personajes.json'), 'utf8'))
    }

    getAllCharacters(): Character[]{
        return this.characters
    }
    getCharacterById(id: number): Character | undefined {
        const character = this.characters.find(char => char.id === id)
        return character
    }
}