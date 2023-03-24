const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_usuarios = sequelize.define(
    "usuarios", {
        idusuario: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        rol: Sequelize.STRING,
        estado: Sequelize.TINYINT,
        token: Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'usuarios'
    }
);


module.exports = base_usuarios;