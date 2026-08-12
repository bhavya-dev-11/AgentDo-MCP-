import express from 'express';
import router from './modules/tasks/task.routes.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(router);

app.get('/', (req, res)=> {
    res.json({message: "AgentDo MCP"})
})

app.listen(PORT, (
  console.log(`Server is live on PORT ${PORT}`)
));