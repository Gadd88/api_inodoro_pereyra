import { Router } from "express";
import { getAllCharacters,getAllPhrases, getOneCharacter, getOnePhrase } from '../controllers/controller'
const router = Router()

router.get('/personajes', getAllCharacters)
router.get('/personajes/:id', getOneCharacter)
router.get('/frases', getAllPhrases)
router.get('/frases/:id', getOnePhrase)

export default router