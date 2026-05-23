import {test, expect} from '@playwright/test';
import fs from "fs";

test("Create New Booking With POST Call:", async function({request}){

    const file = fs.readFileSync("./test-data/BookingData.json")

    const booking = JSON.parse(file.toString())

    const response = await request.post("https://restful-booker.herokuapp.com/booking", 
        
        { 
            headers:{"Content-Type": "application/json"},

            data:booking
        })

    const responsejson = await response.json()

    console.log(responsejson)

});


