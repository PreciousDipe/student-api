const express = require('express');
const morgan = require('morgan');
const studentRouter = require('./routes/students');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/students', studentRouter);

app.get ('/api/v1/healthcheck', (req, res) => {
    res.json({
        status: 'ok'
    });
});

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
