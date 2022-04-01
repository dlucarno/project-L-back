import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Prop from 'App/Models/Prop'

export default class PropsController {

    async store({request,response}:HttpContextContract){

        let data = await request.body()

        const prop = await Prop.create(data)

        if(prop){
            return response.status(200).send({"messages":"success","id":prop.id})
        }else{
            return response.status(403).send({"messages":"unable to create un field"})
        }
    }

    async index({request,response}:HttpContextContract){

        const props = await Database.from('props').where('field_id',request.param('id'))

        return response.send(props)
    }
}
