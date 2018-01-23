import RutrackerApi from 'rutracker-api-2';

console.log(RutrackerApi);

const rutracker = new RutrackerApi();

const config = {

}

rutracker.login(config.username, config.password)
  .then(console.log)
  .catch(console.error);

export default () => {
  console.log('search');
  rutracker.search('abba').then(console.log);
}