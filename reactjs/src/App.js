import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <h1>Home (ReactJs)</h1>
          </Route>
          <Route path="/products" exact>
            <h1>Products (ReactJs)</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
