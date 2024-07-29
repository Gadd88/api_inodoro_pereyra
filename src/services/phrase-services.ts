import { Phrase } from "../models/phrase";
import * as fs from 'fs'
import * as path from 'path'

export class PhraseService {
    private phrases: Phrase[]

    constructor(){
        this.phrases = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/frases.json'), 'utf8'))
    }

    getAllPhrases(): Phrase[]{
        return this.phrases
    }
    getPhraseById(id: number): Phrase | undefined {
        const phrase = this.phrases.find(phrase => phrase.id === id)
        return phrase
    }
}