const http = require('http');

// My computer has a lot of mailboxes to look at, so I need to choose which port to send things from
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('ES Lint!');
  response.end();
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
