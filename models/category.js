'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Category.belongsToMany(models.Story, {through: 'StoryCategory'});
      }
    }
  });
  return Category;
};
