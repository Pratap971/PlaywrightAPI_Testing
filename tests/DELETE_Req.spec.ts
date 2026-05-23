import { test, expect } from '@playwright/test';

test("Delete Examples: ", async function ({ request }) {

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

    console.log("======================================================");


    const DeleteResponse = await request.delete("https://restful-booker.herokuapp.com/booking/"+bookingID, { headers:{ "Content-Type": "application/json", "Cookie":"token=" +authtoken }})

    console.log(DeleteResponse.status());

    expect(DeleteResponse.status()).toBe(201)

    console.log(DeleteResponse.statusText());

    expect(DeleteResponse.statusText()).toBe("Created")

    console.log("======================================================");


    const GetResponse = await request.get("https://restful-booker.herokuapp.com/booking/"+bookingID)

    console.log(GetResponse.status())

    expect(GetResponse.status()).toBe(404)

    console.log(GetResponse.statusText())

    expect(GetResponse.statusText()).toBe("Not Found")


});