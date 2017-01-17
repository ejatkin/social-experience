'use strict';
module.exports = function(sequelize, DataTypes) {
  var Story = sequelize.define('Story', {
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    perspective: DataTypes.STRING,
    content: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Story;
};

Story.belongsToMany(Category, {through: 'StoryCategory'});
