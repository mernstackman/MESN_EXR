"use strict";
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define(
    "Shop",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Shop.associate = function(models) {
    // Shop has many coffees
    Shop.hasMany(models.Coffee);
  };
  return Shop;
};
