import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FieldsItems extends BaseSchema {
  protected tableName = 'fields_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('value')
      table.integer('field_id').unsigned().references('id').inTable('fields').onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
