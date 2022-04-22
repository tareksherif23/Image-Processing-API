import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe('Test /image endpoint responses', () => {

  it('gets the image endpoint with no filename', async () => {
    const response = await request.get('/image');
    expect(response.status).toBe(400);
  });

  it('gets the image endpoint with a filename that does not exist', async () => {
    const response = await request.get('/image?filename=noneImage');
    expect(response.status).toBe(404);
  });

  it('gets the image endpoint with a filename that exists', async () => {
    const response = await request.get('/image?filename=sunflower');
    expect(response.status).toBe(200);
  });

  it('gets the image endpoint with a filename that exists and dimensions for resizing', async () => {
    const response = await request.get('/image?filename=sunflower&width=400&height=250');
    expect(response.status).toBe(200);
  });

});
