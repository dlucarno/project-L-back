import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Field from './Field'

export default class Prop extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column()
  public value:boolean

  @column()
  public field_id: number

  @belongsTo( ()=> Field)
  public field : BelongsTo<typeof Field>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
