import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  let token = ``

  it('/contacts (GET)', () => {
    return request(app.getHttpServer())
      .get('/contacts')
      .expect(401)
  });


  it('/contacts/5555 (GET Detail) unauthorized', () => {
    return request(app.getHttpServer())
      .get('/contacts/5')
      .expect(401)
  });

  // it('/auth/signup (POST signUp) success', () => {
  //   return request(app.getHttpServer())
  //     .post('/auth/signup')
  //     .send({ username: 'nfs', password: 'nfs' })
  //     .expect(201)
  // });

  it('/auth/login (POST login) success', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'nfs', password: 'nfs' })
      .expect(201)
      .expect((response: request.Response) => {
        const {
          access_token
        } = response.body;

        token = `Bearer ${access_token}`

        expect(typeof access_token).toBe("string")

      })
  });


  it('/contacts/5555 (GET Detail) No found contact', () => {
    return request(app.getHttpServer())
      .get('/contacts/5')
      .set("Authorization", token)
      .expect(404)
  });

  it('/contacts/5555 (GET Detail) unauthorized', () => {
    return request(app.getHttpServer())
      .get('/contacts/16')
      .set("Authorization", token)
      .expect(200)
  });

});
