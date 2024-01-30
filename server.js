const OpenAI = require('openai');
// import {OpenAI} from "openai";
const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const image = await openai.images.generate({ model: "dall-e-3", prompt: "A cute baby sea otter" });

  console.log(image.data);
}
main();


// const { Configuration, O } = require('openai')
// const configuration = new Configuration({
//   apiKey: process.env.API_KEY,
// });
// const openai = new OpenAI(configuration);

// app.post('/images', async (rec, res) => {
//   try {
//     const image = await openai.images.generate({ 
//       model: "dall-e-3", 
//       prompt: "A cute baby sea otter" 
//     });
//     console.log(image.data);
//     res.send(image.data.data)
//   } catch (error) {
//     console.error(error);
//   }
// })


// const openai = new OpenAI({
//   apiKey: process.env.API_KEY,
// });

// app.post('/images', async (req, res) => {
//   try {
//     const response = await openai.images.generate({
//       prompt: "A cute baby sea otter",
//       n: 2,
//       size: '1024x1024',
//     });
//     console.log(response.data.data)
//     res.send(response.data.data)
//   } catch (error) {
//     console.error(error);
//   }
// })

// async function main() {
//   const image = await openai.images.generate({ model: "dall-e-3", prompt: "A cute baby sea otter" });

//   console.log(image.data);
// }
// main();


app.listen(PORT, () => console.log('Your server is running on PORT' + PORT))

// nodemon listens for constant changes on the backend