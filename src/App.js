import React from "react";
import { Dataprovider } from "./GlobalState";
import {BrowserRouter as Route} from "react-router-dom"
import Header from "./components/header/Header";
import Pages from "./components/mainpages/Pages";

function App() {
  return (
    <Dataprovider>
      <Route>

           <div className="App">
                 <Header/>
                 <Pages/>
                 
           </div>

    </Route>
    </Dataprovider>
  );
}

export default App;
