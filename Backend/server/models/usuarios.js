
module.exports = (sequelize, DataTypes) => {
    const usuarios = sequelize.define('usuarios', {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        usuario: DataTypes.STRING,
        password: DataTypes.STRING,
        id_rol: DataTypes.INTEGER,
        activo: DataTypes.BOOLEAN,
        usuario_creacion: DataTypes.STRING,
    },{
        sequelize,
        modelName: 'usuarios',
        timestamps: true
    })

    return usuarios;
};
