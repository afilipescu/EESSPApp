'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../webapp')));

// app.use('/', require('./routes/user')());
// app.use('/', require('./routes/firma')());
 app.use('/', require('./routes/person')());
// app.use('/', require('./routes/dosar_medical')());
// app.use('/', require('./routes/anamneza')());
// app.use('/', require('./routes/fisa_apt')());

app.listen(PORT, function() {
    console.log(`Server started and listening ${PORT}`);
});
