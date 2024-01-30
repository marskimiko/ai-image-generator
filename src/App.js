const App = () => {
  const surpriseOptions = [
    'A blue ostrich eating melon',
    'A matisse style shark on the telephone',
    'A pineapple sunbathing on an island'
  ]

  return (
    <div className="app">
      <section className="search-section">
        <p>Please enter a detailed description 
          <span className="surprise">Surprise me</span>
        </p>
      </section>
      <section className="image-section"></section>
    </div>
  );
}

export default App;
