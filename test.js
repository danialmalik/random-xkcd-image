const supertest = require('supertest');
const assert = require('assert');

const port = 3000

const server = supertest(`http://localhost:${port}`);

const TIMEOUT = 5000;

describe('random xkcd image test',()=> {
    it('verfies the correct response from api',(done)=> {
        server
        .get('/')
        .expect(200)
        .end((err, res)=> {
            if (err) return done(err);
            assert(res.body.hasOwnProperty('url'));
            assert(res.body.hasOwnProperty('title'));
            done()
        });
    });
}).timeout(TIMEOUT);
