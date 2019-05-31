const supertest = require('supertest');
const assert = require('assert');

const config = require('./config');

const url = config.hostUrl;
const port = config.hostPort;

const server = supertest(`${url}:${port}`);

const TIMEOUT = 2000;

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
