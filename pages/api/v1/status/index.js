function status(request, response) {
  response.status(200).json({
    message: "status message",
    UTF: response.json.charset,
  });
}

export default status;
