import { useState } from 'react';

const App = () => {
  const [images, setImages] = useState(null);
  const [value, setValue] = useState("");
  const surpriseOptions = [
    'A blue ostrich eating melon',
    'A matisse style shark on the telephone',
    'A pineapple sunbathing on an island'
  ]

  const getImages = async() => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          message: ""
        }),
        headers: {
          "Content-type": "application/json"
        }
      }
    const response = await fetch('http://localhost:8000/images', options)
    const data = await response.json();
    debugger
    console.log('data:',data)
    setImages(data)
    console.log('images',images)
    } catch (error) {
      console.error(error);
    }
  }

  console.log('value',value)

  return (
    <div className="app">
      <section className="search-section">
        <p>Please enter a detailed description 
          <span className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input
            value={value} 
            placeholder="A cat dancing in the rain under the milky way..."
            onChange={e => setValue(e.target.value)}
          />
          <button onClick={getImages}>Generate</button>
        </div>
      </section>
      <section className="image-section">
        {images?.map((image, _index) => (
          <img key={_index} src={image.url} alt={`Generated pic of ${value}`}/>
        ))}
      </section>
    </div>
  );
}

export default App;
