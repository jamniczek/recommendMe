const correctRequestGames = {
  type: 'games',
  titles: ['alien', 'gothic 2', 'the office'],
};

const noResultsRequest = {
  type: 'some random string',
  titles: ['2132132131231311', '', '///////'],
};

module.exports = {
  correctRequestGames,
  noResultsRequest,
};
