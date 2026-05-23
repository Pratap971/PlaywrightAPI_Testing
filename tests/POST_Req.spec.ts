import { test, expect } from '@playwright/test'

test('POST Call Example with Token & BookingID: ', async ({ request }) => {

    const authdata = {
        "username": "admin",
        "password": "password123"
    }

    const response = await request.post("https://restful-booker.herokuapp.com/auth", { headers: { "Content-Type": "application/json" }, data: authdata })

    console.log(response.status());

    const responseData = await response.json()

    expect(responseData.token).not.toBeNull()

});

test('POST Call Example with BookingID: ', async ({ request }) => {

    const BookingData = {
    "firstname" : "Kane",
    "lastname" : "Williamson",
    "totalprice" : 500,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2026-05-16",
        "checkout" : "2026-06-10"
    },
    "additionalneeds" : "Lunch"
}

    const response = await request.post("https://restful-booker.herokuapp.com/booking", { headers: { "Content-Type": "application/json" }, data: BookingData })

    console.log(response.status());

    const responseData = await response.json()

    console.log(responseData);

    expect(responseData.BookingID).not.toBeNull()

    expect(responseData.booking.firstname).toBe(BookingData.firstname)

});