
module.exports = (sequelize, DataTypes) => {
    const fotografias = sequelize.define('fotografias', {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        fotografia: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        imagen: DataTypes.STRING,
        activo: DataTypes.BOOLEAN,
        numero: DataTypes.INTEGER,
        autor: DataTypes.STRING,
        usuario_creacion: DataTypes.STRING,
    },{
        sequelize,
        modelName: 'fotografias',
        timestamps: true
    })

    return fotografias;
};
