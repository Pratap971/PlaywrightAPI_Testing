import {test, expect} from '@playwright/test'

test("PATCH Example: Verify partial update", async function({ request }) {

  // Auth
  const authResponse = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      headers: { "Content-Type": "application/json" },
      data: {
        username: "admin",
        password: "password123"
      }
    }
  );

  const token = (await authResponse.json()).token;

  // Create Booking
  const createResponse = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: { "Content-Type": "application/json" },
      data: {
        firstname: "Test",
        lastname: "User",
        totalprice: 100,
        depositpaid: true,
        bookingdates: {
          checkin: "2025-01-01",
          checkout: "2025-01-05"
        },
        additionalneeds: "Breakfast"
      }
    }
  );

  const bookingData = await createResponse.json();
  const bookingId = bookingData.bookingid;

  console.log(bookingData)

  console.log("Booking ID:", bookingId);

  // PATCH Update (only partial fields)
  const patchResponse = await request.patch(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Cookie": `token=${token}`
      },
      data: {
        totalprice: 500,
        additionalneeds: "Dinner"
      }
    }
  );

  const patchJson = await patchResponse.json();
  console.log(patchJson);

  // Assertions
  expect(patchJson.totalprice).toBe(500);
  expect(patchJson.additionalneeds).toBe("Dinner");

});
