const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../app');

chai.use(chaiHttp);

let link = {
  originurl: 'www.google.com'
}

describe('API Short Url',function(){
  it('Post Url',function(done){
    chai.request(app)
    .post('/short_url')
    .send(link)
    .end(function(err,res){
      res.should.have.status(200);
      console.log(res.body);
      res.body[0].should.have.property('_id');
      res.body[0].should.have.property('originurl');
      res.body[0].should.have.property('shorturl');
      done()
    })
  })
  it('Post Url',function(done){
    chai.request(app)
    .get('/short_url')
    .set('shorturl', 'vAW')
    .end(function(err,res){
      res.should.have.status(200);
      res.body[0].should.have.property('_id');
      res.body[0].should.have.property('originurl');
      res.body[0].should.have.property('shorturl');
      done()
    })
  })
})
