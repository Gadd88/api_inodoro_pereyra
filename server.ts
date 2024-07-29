import { App } from './src/app'

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000
const app = new App(PORT)

app.listen()
