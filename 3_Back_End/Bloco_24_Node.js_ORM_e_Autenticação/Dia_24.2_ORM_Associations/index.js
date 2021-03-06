const bodyParser = require('body-parser');

const express = require('express');

const { Patients, Plans, Surgeries } = require('./models');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/patients', async (_req, res) => {
  try {
    const patients = await Patients.findAll({
      attributes: { exclude: ['plan_id'] },
      order: [['patient_id', 'ASC']],
      include: { model: Plans, as: 'plan' },
    });

    if (!patients.length) {
      return res.status(404).json({ message: 'No patients found' });
    }

    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/patients-surgeries', async (_req, res) => {
  try {
    const patients = await Patients.findAll({
      // attributes: { exclude: ['plan_id'] },
      order: [['patient_id', 'ASC']],
      include: {
        model: Surgeries,
        as: 'surgeries',
        through: { attributes: [] },
      },
    });

    if (!patients.length) {
      return res.status(404).json({ message: 'No patients found' });
    }

    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/patients-plans/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const patients = await Plans.findAll({
      where: { plan_id: id },
      include: {
        model: Patients,
        as: 'patients',
        attributes: { exclude: ['plan_id'] },
      },
    });

    if (!patients.length) {
      return res.status(404).json({ message: 'No plan found' });
    }

    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/patients', async (req, res) => {
  try {
    const { fullname, plan_id } = req.body;

    const patients = await Patients.create({ fullname, plan_id });

    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/patients-surgeries-no-doctor', async (_req, res) => {
  try {
    const patients = await Patients.findAll({
      order: [['patient_id', 'ASC']],
      include: {
        model: Surgeries,
        as: 'surgeries',
        through: { attributes: [] },
        attributes: { exclude: ['doctor'] },
      },
    });

    if (!patients.length) {
      return res.status(404).json({ message: 'No patients found' });
    }

    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/surgeries/:name', async (req, res) => {
  try {
    const { name } = req.params;

    const surgeries = await Surgeries.findAll({
      where: { doctor: name },
      attributes: { exclude: ['surgery_id'] },
      include: {
        model: Patients,
        as: 'patients',
        through: { attributes: [] },
      },
    });

    if (!surgeries.length) {
      return res.status(404).json({ message: 'No doctor found' });
    }

    return res.status(200).json(surgeries);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
