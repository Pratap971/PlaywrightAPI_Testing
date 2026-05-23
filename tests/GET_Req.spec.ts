import { test, expect, request } from '@playwright/test';

test("Test Get API: ", async ({ request }) => {

    const resp = await request.get("https://jsonplaceholder.typicode.com/todos/1");

    const Respbody = await resp.body();
    const Respstatus = await resp.status();
    const Respstatustext = await resp.statusText();
    const Respjson = await resp.json();     // Get the response as a Json body
    const Respheaders = await resp.headers();
    const RespheadersArray = await resp.headersArray();

    // console.log(Respbody);
    // console.log(Respstatus);
    // console.log(Respstatustext);
    // console.log(Respjson);
    // console.log(Respheaders);
    // console.log(RespheadersArray);

    expect(Respstatus).toBe(200);
    expect(Respstatustext).toBe('OK');
    expect(resp.ok()).toBeTruthy();
    expect(Respjson).toHaveProperty('userId',1);
    expect(Respjson).toHaveProperty('id',1);
    expect(Respjson).toHaveProperty('title','delectus aut autem');
    expect(Respjson).toHaveProperty("completed",false);





});