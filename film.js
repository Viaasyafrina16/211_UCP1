module.exports = (sequelize, DataTypes) => {
    const film = sequelize.define("film",{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true