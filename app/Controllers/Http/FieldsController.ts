import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Field from 'App/Models/Field'

export default class FieldsController {

    async store({request,response}:HttpContextContract){

        let data = await request.body()

        const field = await Field.create(data)

        if(field){
            return response.status(200).send({"messages":"success","id":field.id})
        }else{
            return response.status(403).send({"messages":"unable to create un field"})
        }
    }

    async index({request,response}:HttpContextContract){

        const fields = await Database.from('fields').where('formulaire_id',request.param('id'))

        return response.send(fields)
    }
}
