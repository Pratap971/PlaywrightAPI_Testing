import { test, expect } from '@playwright/test';

test("Check API Health: ", async function ({ request }) {

    // By default test timeout 30 second(30000 ms) 

    test.setTimeout(0)

    while (true) {

        const start = Date.now()

        const response = await request.get("https://restful-booker.herokuapp.com/ping");

        const end = Date.now()

        const duration = end - start

        if (duration > 2000) {
            throw new Error(`API Response is Slow ${duration}`)

        }
        else {
            console.log(`Total Duration of Response is: ${duration}`)
        }

        const status = response.status()

        console.log(`Response code from API is: ${status}`)

        expect(status).toBe(201)

    }


});
