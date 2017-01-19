'use strict';
module.exports = function(sequelize, DataTypes) {

  var Story = sequelize.define('Story', {
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    perspective: DataTypes.STRING,
    content: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Story.belongsToMany(models.Category, {through: 'StoryCategory'});
      }
    }
  });
  return Story;
};
