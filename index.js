module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "I want more projects for best learning!",
      },
      null,
      2
    ),
  };
};
