import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Props extends BaseSchema {
  protected tableName = 'props'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.boolean('value').defaultTo(false)
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
