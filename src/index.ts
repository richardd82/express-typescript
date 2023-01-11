import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // transforma req.body a JSON

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Somebody pinged here!! ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
