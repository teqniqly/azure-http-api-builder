class PutRequestHandler {
  constructor() {}
  
  run(context, req) {
    context.res = {
      status: 200,
      body: 'PUT request processed.'
    };

    context.done();
  }
}

module.exports = PutRequestHandler;
