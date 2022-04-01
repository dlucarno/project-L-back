import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Field from './Field'

export default class Formulaire extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string 

  @hasMany( () => Field  )
  public fields: HasMany<typeof Field> 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
