// const app = require('../server/server');
// const supertest = require('supertest');
// const request = supertest(app);

// app.get('/test', async (req, res) => {
//   res.json({message: 'pass test!'});
// });

// const request = require('supertest');

// const server = 'http://localhost:3000';

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
// describe('Route integration', () => {
//   describe('database/login'), () => {
//     describe ('GET', () => {
//       it('responds with 200 status if user is in database', async () => {
//         return await request(server)
//         .get('database/login')
//         .send({"username": 'Baron', "password": 'baron'})
//         .expect('Location', '/')
//         .expect(200)
//         })
//       })
//     })
//   }
//   //test for sign up post request
//   describe('database/signup'), () => {
//     // invalid sign up
//     describe ('POST', () => {
//       it('responds with 201 status upon successful sign up', async () => {
//         return await request(server)
//         .post('database/signup')
//         .send({"username": null, "password": null})
//         .expect(401)
//         .expect((res) => {
//           expect(res.verified).toEqual(false)
//         })
//       })
//     })
//     describe ('POST', () => {
//       it('responds with 201 status upon successful sign up', async () => {
//         return await request(server)
//         .post('/signup')
//         .send('')
//         .expect((res) => {
//           expect()
//         })
//       })
//     })
//   }
// });
