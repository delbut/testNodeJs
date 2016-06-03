/**
 * Created by maxime on 03/06/16.
 */

var request = require('supertest');
var api = require ('../index')

describe('API', function () {
    describe('Contacts /', function () {
        it('GET /contacts should return list of registered contacts', function () {
            return request(api)
                .get('/api/contacts')
                .send()
                .expect(200);
        });
        it('GET /contacts/:name should return contact of registered by name', function () {
            return request(api)
                .get('/api/contacts/foo')
                .send()
                .expect(200)
                .expect(function (res, err) {
                    return res.body instanceof Array
                });
        });
        // it('GET /contacts/:name should return 404 response', function () {
        //     return request(api)
        //         .get('/contacts/none')
        //         .send()
        //         .expect(404);
        // });
        it('POST /contacts should create contact', function () {
            return request(api)
                .post('/api/contacts')
                .send({contact: {name: "edward"}})
                .expect(200);
        });
        it('POST /contacts/:name should return a 422', function () {
            return request(api)
                .post('/api/contacts')
                .send({foo: 'bar'})
                .expect(422);
        });
        it('PUT /contacts/:name/:new update all contact with the same name', function () {
            return request(api)
                .put('/api/contacts/foo/bar')
                .send()
                .expect(200);
        });
        it('DELETE /contacts/:name delete all contact with the same name', function () {
            return request(api)
                .delete('/api/contacts/foo')
                .send()
                .expect(200);
        })
    });
});