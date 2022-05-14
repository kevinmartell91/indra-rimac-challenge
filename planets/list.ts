"use strict";

module.exports.list = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Planet list function executed successfully!",
      input: event,
    }),
  };

  callback(null, response);
};
