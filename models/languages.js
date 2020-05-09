module.exports = function(sequelize, DataTypes) {
  const Language = sequelize.define('Language', {
    lang: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being
      // entered if it doesn't have a text value
      allowNull: false,
      // len is a validation that checks that our todo is
      // between 1 and 140 characters
      validate: {
        len: [1, 32],
      },
    },
  });
  return Language;
};