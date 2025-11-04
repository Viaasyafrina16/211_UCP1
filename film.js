module.exports = (sequelize, DataTypes) => {
    const film = sequelize.define("film",{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true

        },
        Nama_film:{
            type : DataTypes.STRING,
        },
        Deskripsi:{
            type : DataTypes.STRING,
        },
        

