import express, { Application } from 'express'
import routes from './routes'
import cors from 'cors'
import { swaggerDocs } from './docs/swagger'
export class App {
    public app: Application
    public port: number

    private middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
    private routes(){
        this.app.use('/api', routes)
    }

    private swaggerDocs(){
        swaggerDocs(this.app, this.port)
    }

    constructor(port: number){
        this.app = express()
        this.port = port
        this.middlewares()
        this.routes()
        this.swaggerDocs()
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }

}