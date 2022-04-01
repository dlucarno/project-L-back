import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import FieldsItem from 'App/Models/FieldsItem'

export default class FieldsItemsController {

    async store({request,response}:HttpContextContract){

        let data = await request.body()

        const item = await FieldsItem.create(data)

        if(item){
            return response.status(200).send({"messages":"success","id":item.id})
        }else{
            return response.status(403).send({"messages":"unable to create un item"})
        }
    }

    async index({request,response}:HttpContextContract){

        const items = await Database.from('fields_items').where('field_id',request.param('id'))

        return response.send(items)
    }
}
