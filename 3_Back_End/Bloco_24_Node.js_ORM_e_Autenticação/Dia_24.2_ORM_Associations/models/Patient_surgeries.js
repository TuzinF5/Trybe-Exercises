'use strict';

const PatientSurgeries = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define(
    'Patient_surgeries',
    {},
    {
      timestamps: false,
      tableName: 'Patient_surgeries',
    }
  );

  PatientSurgeries.associate = (models) => {
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });

    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return PatientSurgeries;
};

module.exports = PatientSurgeries;
