import { Request, Response } from 'express'
import { CharacterService } from '../services/char-services'
import { PhraseService } from '../services/phrase-services'

const charService = new CharacterService()
const phraseService = new PhraseService()

export const getAllCharacters = (req: Request, res: Response) => {
    const characters = charService.getAllCharacters()
    res.json(characters)
}

export const getAllPhrases = (req: Request, res: Response) => {
    const phrases = phraseService.getAllPhrases()
    res.json(phrases)
}

export const getOneCharacter = (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const character = charService.getCharacterById(parseInt(id))
        if(!character) res.status(404).json({message: 'Personaje no encontrado'})
        res.json(character)
    } catch (error) {
        res.status(500).json({message: 'Error al obtener el personaje'})
    }
}

export const getOnePhrase = (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const phrase = phraseService.getPhraseById(parseInt(id))
        if(!phrase) res.status(404).json({message: 'Frase no encontrada'})
        res.json(phrase)
    } catch (error) {
        res.status(500).json({message: 'Error al obtener la frase'})
    }
}