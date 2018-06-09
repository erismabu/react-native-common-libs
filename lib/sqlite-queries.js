function dropTable(tableName) {
  return `DROP TABLE IF EXISTS ${tableName}`;
}

function createTable(tableName, schema) {
  const values = [];
  schema.forEach(element => {
    values.push(`${element.name} ${element.type.toUpperCase()}${element.isprimary ? ' PRIMARY KEY' : ''}${element.isnotnull ? ' NOT NULL' : ''}`);
  });
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(${values})`;
  return query;
}

function deleteAllValues(tableName) {
  return `DELETE FROM ${tableName}`;
}

function insertAllValues(tableName, schema) {
  const columns = [];
  const values = [];
  schema.forEach(element => {
    columns.push(element.name);
    values.push('?');
  });

  const query = `INSERT OR REPLACE INTO ${tableName} (${columns}) VALUES (${values})`;
  return query;
}

function selectAllValues(tableName) {
  return `SELECT * FROM ${tableName}`;
}

export default { dropTable, createTable, deleteAllValues, insertAllValues, selectAllValues };
