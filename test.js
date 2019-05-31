const supertest = require('supertest');
const assert = require('assert');

const server = supertest('http://localhost:3000');

const TIMEOUT = 2000;

describe('random xkcd image test',()=> {
    it('verfies the correct response from api',(done)=> {
        server
        .get('/')
        .expect(200)
        .end((err, res)=> {
            if (err) return done(err);
            console.log(res)
            assert(res.body.hasOwnProperty('url'));
            assert(res.body.hasOwnProperty('title'));
            done()
        });
    });
}).timeout(TIMEOUT);
