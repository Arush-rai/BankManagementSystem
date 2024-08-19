const express = require('express');
const cors = require('cors');
const UserRouter = require('./routers/userRouter');
const FixedRouter = require('./routers/fixedRouter');
const RecurringRouter = require('./routers/recurringRouter');
const SavingRouter = require('./routers/savingRouter');
const DemandRouter = require('./routers/demandRouter');

const app = express();
const port = 5000;

app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(express.json());

app.use('/user', UserRouter);
app.use('/fd', FixedRouter);
app.use('/recurring', RecurringRouter);
app.use('/saving', SavingRouter);
app.use('/demand', DemandRouter);

app.get('/', (req, res) => {
    console.log('response from express');
})

app.listen(port, () => {
    console.log('server started');
})