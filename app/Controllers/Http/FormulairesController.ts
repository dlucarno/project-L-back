 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import Formulaire from 'App/Models/Formulaire'

export default class FormulairesController {

    async store({request,response}:HttpContextContract){

        const data = await request.body()

        const formulaire = await Formulaire.create(data)
      
        if(formulaire){
            return response.status(200).send({"messages":"success","id":formulaire.id})
        }else{
            return response.status(403).send({"messages":"unable to create un formuliare"})
        }

    }
    
    async index({response}:HttpContextContract){

        const formulaires = await Formulaire.all()

        return response.send(formulaires)
    }

    async view_one({request,response}:HttpContextContract){

        const form = await Formulaire.find(request.param('id'))

        return response.send(form)
    }
}
