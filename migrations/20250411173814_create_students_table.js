exports.up = function(knex) {
    return knex.schema.createTable('students', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('age').notNullable();
      table.string('grade').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('students');
  };