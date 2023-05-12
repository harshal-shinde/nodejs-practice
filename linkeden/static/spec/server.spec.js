const { request } = require("express");

describe('calculator', ()=>{
  it('should multiply 2 *2', ()=> {
    expect(2*2).toBe(4);
  })
});

// describe('Get Messages', ()=>{
//   it('Should return 200 OK', (done)=>{
//     request.get("http://localhost:3000/messages", (err, res)=>{
//       expect(JSON.parse(res.body).length).toBeGreaterThan(0)
//       // done();
//     })
//   })
// })