import logo from './logo.svg';
import List from './list';
import './App.css';

function App() {
  return (
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
                <div className="card px-3">
                    <List/>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
