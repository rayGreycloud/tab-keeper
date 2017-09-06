module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabkeeper',
    user: process.env.DB_USER || 'tabkeeper',
    password: process.env.DB_PASS || 'tabkeeper',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabkeeper.sqlite'
    }
  }
}
