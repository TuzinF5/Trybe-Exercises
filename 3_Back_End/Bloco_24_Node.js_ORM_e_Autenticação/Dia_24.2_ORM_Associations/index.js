const bodyParser = require('body-parser');

const express = require('express');

const { Patients, Plans } = require('./models');

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

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
