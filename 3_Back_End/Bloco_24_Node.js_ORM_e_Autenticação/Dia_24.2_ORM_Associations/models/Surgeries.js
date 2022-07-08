'use strict';

const Surgeries = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define(
    'Surgeries',
    {
      surgery_id: { type: DataTypes.INTEGER, primaryKey: true },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Surgeries',
    }
  );

  return Surgeries;
};

module.exports = Surgeries;
