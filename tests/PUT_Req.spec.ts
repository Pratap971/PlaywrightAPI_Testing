import { test, expect } from '@playwright/test';

test("PUT Examples: ", async function ({ request }) {

    const AuthData = {
        "username": "admin",
        "password": "password123"
    }


    const response = await request.post("https://restful-booker.herokuapp.com/auth", { headers: { "Content-Type": "application/json" }, data: AuthData });

    const jsonresp = await response.json();

    const authtoken = jsonresp.token

    console.log("Token is : " + authtoken);


    const NewBookingData = {
        "firstname": "Jimy",
        "lastname": "Lyon",
        "totalprice": 99.9,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2025-12-01",
            "checkout": "2026-01-01"
        },
        "additionalneeds": "Dinner"
    }

    const NewBookingResponse = await request.post("https://restful-booker.herokuapp.com/booking", { headers: { "Content-Type": "application/json" }, data: NewBookingData });

    const NewBookingRespjson = await NewBookingResponse.json()

    console.log(NewBookingRespjson)

    const bookingID = NewBookingRespjson.bookingid

    console.log("New BookingID is: " + bookingID)


    const UpdatedBookingData = {
        "firstname": "Jimy",
        "lastname": "Lyon",
        "totalprice": 400,
        "depositpaid": false,
        "bookingdates": {
            "checkin": "2026-04-01",
            "checkout": "2026-05-01"
        },
        "additionalneeds": "Dinner"
    }


    const UpdatedResponse = await request.put("https://restful-booker.herokuapp.com/booking/" + bookingID,

        { headers: { "Content-Type": "application/json", "Accept": "application/json", "Cookie": "token=" + authtoken }, data: UpdatedBookingData })


    const UpdatedResponseJson = await UpdatedResponse.json()

    console.log(UpdatedResponseJson)




});
