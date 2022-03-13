import {
    jest,
    expect,
    test,
    describe
} from '@jest/globals';

import superTest from 'supertest'

import Server from '../../src/server.js'

describe('API E2E Test Suite', () => {

    test('GET / - should return an array', async () => {
        const response = await superTest(Server)
            .get('/')
        expect()
        const data = JSON.parse(response.text)
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)
    })

    test('POST / - should save an item and return ok', async () => {
        const response = await superTest(Server)
            .post('/')
            .send({
                name: 'filipe',
                age: 26
            })
        const expectedResponse = JSON.stringify({
            ok: 1
        })
        expect(response.text).toStrictEqual(expectedResponse)
    })
})