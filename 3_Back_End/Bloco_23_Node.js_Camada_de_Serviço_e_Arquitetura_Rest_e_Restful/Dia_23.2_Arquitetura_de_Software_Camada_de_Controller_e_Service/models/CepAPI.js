const axios = require('axios');

const getCep = async (cepApi) => {
  try {
    const data = await axios.get(`https://viacep.com.br/ws/${cepApi}/json/`);

    return data;
  } catch (error) {
    console.log(error);
    return data;
  }
};

module.exports = { getCep };
