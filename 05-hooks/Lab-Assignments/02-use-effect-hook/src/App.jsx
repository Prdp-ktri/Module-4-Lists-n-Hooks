import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <>
      <h1>Photo Gallery</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>URL</th>
            <th>Thumbnail URL</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <td>{photo.id}</td>
              <td>{photo.title}</td>
              <td>
                <a href={photo.url} target="_blank" rel="no opener no referror">
                  View Photo
                </a>
              </td>
              <td>
                <a
                  href={photo.thumbnailUrl}
                  target="_blank"
                  rel="no opener no referror"
                >
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
