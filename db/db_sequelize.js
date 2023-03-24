const Sequelize = require('sequelize');

// Datos de configuración de la BD
const dataConex = {
    database: 'paluz',
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
};

const sequelize = new Sequelize(dataConex.database, dataConex.user, dataConex.password, {
    host: dataConex.host,
    port: dataConex.port,
    dialect: dataConex.dialect,
    pool: {
        max: 5,
        min: 2,
        acquire: 15000,
        idle: 10000,
    },
    // logging: false,
    define: {
        timestamps: false,
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado a la bd')
    })
    .catch(err => {
        console.log('No se conecto a la bd: ' + err)
    });

module.exports = sequelize;