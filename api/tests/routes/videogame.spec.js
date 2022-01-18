/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');



const agent = session(app);
const videogame = {
  id:'32d31e6c-6bdf-4b7b-abcf-8cc2f074f2a0',
  name:"Mario",
  description: "asddsf", 
  rating: 2,
  released: "2021-12-26" , 
  platforms: ['ANDROID'],
  genres:["Arcade"]
};
const videogame2 = {  
  name:"Mario",
  description: "asddsf", 
  rating: 2,
  image:"https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg",
  released: "2021-12-26" , 
  platforms: ['ANDROID'],
  genres:["Arcade"]
};
describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET Videogames/:id', () => {
    it('should get 200', () =>
      agent.get('/videogames/32d31e6c-6bdf-4b7b-abcf-8cc2f074f2a0').expect(200).timeout(10000)
    );
  });
  describe('GET /genres', () => {
    it('should get 200', () =>
      agent.get('/genres').expect(200).timeout(10000)
    );
  });
  describe('POST /videogames', () => {
    it('should get 200 when created', () =>
      agent.post('/videogames')
      .send(videogame2).expect(200).timeout(10000)
    );
  });  
});
