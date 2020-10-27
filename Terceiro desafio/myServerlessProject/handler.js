'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello full cycle',
      },
      null,
      2
    ),
  };
};

module.exports.soma = (event, context, callback) => {
  let result;
  let a = 0; 
  let b = 0;
  // check for GET params and use if available
  if (!event.queryStringParameters && !event.queryStringParameters.a && !event.queryStringParameters.b) {
    result = "Valores invalidos";
  }else{
    if(event.queryStringParameters.a){
      a = parseFloat(event.queryStringParameters.a);
    }
    if(event.queryStringParameters.b){
      b = parseFloat(event.queryStringParameters.b); 
    }
    result = a + b;
  }

  const some = JSON.stringify({message: result});

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: some,
  };

  callback(null, response);
};
