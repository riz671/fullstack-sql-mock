// Controller here
// complete building out the controller


const controller = {
  get: (req, res) => {
    res.send('get!');
  },
  post: (req, res) => {
    res.send('post!');
  },
  put: (req, res) => {
    res.send('put!');
  },
  delete: (req, res) => {
    res.send('delete!');
  }
};

module.exports = controller;