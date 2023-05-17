const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserTask extends Model {}

UserTask.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    completion_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    task_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'task',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userTask',
  }
);

module.exports = UserTask;
