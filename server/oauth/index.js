const express = require('express');
const router = express.Router();

router
  .route('/authorize')
  .get((req, res) => {
    const response_type = req.query.response_type;
    const client_id = req.query.client_id;
    const redirect_uri = decodeURIComponent(req.query.redirect_uri);

    let code = 'wrong_params';

    if(client_id === 'ng-playground' && response_type === 'code') {
      const buff = Buffer.from(makeid(8));
      code = buff.toString();
    }

    const url = `${redirect_uri}?code=${code}`;

    res.redirect(url);
  });

module.exports = router;

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}