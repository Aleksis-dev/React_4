import React, { useState, useEffect } from 'react';

function RandomCat() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCatImage = () => {
    setLoading(true);
    setError(null);
    fetch('https://cataas.com/cat/gif?json=true')
      .then(res => res.json())
      .then(data => {
        setImageUrl(data.url);
        console.log(data)
        setLoading(false);
      })
      .catch(err => {
        setError(`Failed to fetch image: ${err.message}`);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div>
      <h1>Random Cat gifs</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageUrl && !loading && <img src={imageUrl} alt="Random Cat" width="300" />}
      <br />
      <button onClick={fetchCatImage}>Fetch New Cat gif</button>
    </div>
  );
}

export default RandomCat;