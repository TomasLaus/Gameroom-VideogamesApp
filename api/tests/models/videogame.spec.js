const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');


describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when it is a valid name and description', (done) => {
        Videogame.create({     
          name: 'hola',
          description: 'Hola'
        }).then(() => done())
        .catch(() => done(new Error('it should create a new Videogame')));
      });
    });
    describe('description', () => {
      it('should throw an error if description is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
    });    
    describe('rating', () => {
      it('should throw an error if rating is not an interger', (done) => {
        Videogame.create({
          name: 'hola',
          description: 'Hola',
          rating:''          
        })
          .then(() => done(new Error('It requires a valid rating')))
          .catch(() => done());
      });
      it('should work when it is a valid rating', (done) => {
        Videogame.create({     
          name: 'hola',
          description:'Hola',
          rating:10
        }).then(() => done())
        .catch(() => done(new Error('it should create a new Videogame')));
      });      
    });  
    describe('image', () => {
      it('should throw an error if image is not a valid url', (done) => {
        Videogame.create({
          name: 'hola',
          description:'Hola',
          image: {}        
        })
          .then(() => done(new Error('It requires a valid image')))
          .catch(() => done());
      });
      it(`should work when it's a valid image`, (done) => {
        Videogame.create({     
          name: 'hola',
          description:'Hola',
          image:"https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/03/Clash-Royale.jpg?fit=1200%2C675&ssl=1"
        }).then(() => done())
        .catch(() => done(new Error('it should create a new Videogame')));
      });      
    });              
  });
});

