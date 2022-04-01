import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Formulaire from './Formulaire'
import Prop from './Prop'
import FieldsItem from './FieldsItem'

export default class Field extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public name:string
  
  @column()
  public label:string
  
  @column()
  public formulaire_id:number

  @hasMany( ()=> Prop )
  public props: HasMany <typeof Prop>

  @hasMany( ()=>FieldsItem )
  public filedsItem : HasMany <typeof FieldsItem>

  @belongsTo( ()=>Formulaire )
  public fomrulaire : BelongsTo <typeof Formulaire>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
