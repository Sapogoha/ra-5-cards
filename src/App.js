import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <Card img="https://loremflickr.com/300/200/animals">
        <h5 className="card-title">{'Card title'}</h5>
        <p className="card-text">
          {
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        </p>
        <a href="#" className="btn btn-primary">
          {' Go somewhere'}
        </a>
      </Card>
      <Card>
        <h5 className="card-title">{'Card title'}</h5>
        <p className="card-text">{'Some text.'}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{'Cras justo odio'}</li>
          <li className="list-group-item">{'Vestibulum at eros'}</li>
        </ul>
        <a href="#" className="btn btn-primary">
          {' Go elsewhere'}
        </a>
      </Card>
    </>
  );
}

export default App;
