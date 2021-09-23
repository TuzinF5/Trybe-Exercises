const getRepos = require('./getRepos');

describe('Quando a funçao GetRepos', () => {
  it('for chamada, verifica que os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram nessa lista', () => ( // troquei { por (, o amarelo
    getRepos('https://api.github.com/orgs/tryber/repos').then((response) => {
      expect(response).toContain('sd-01-week4-5-project-todo-list');
      expect(response).toContain('sd-01-week4-5-project-meme-generator');
    })
  )); // troquei } por ), o amarelo
});
