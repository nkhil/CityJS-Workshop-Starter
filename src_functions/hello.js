exports.handler = function(event, context, callback) {
  // const board = JSON.parse(event);
  console.log("EVENT>>>>>>!", JSON.parse(event.body);

  callback(null, {
    statusCode: 200,
    body: "Hello, CityJS"
  });
};
