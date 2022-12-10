import DataContext from './context/DataContext';

import { Switch , Route, Redirect} from "react-router-dom"
import ProductsApp from './components/ProductsApp.js';
import Ditails from './components/Ditails';
import Navbar  from './shared/Navbar';
import  Cardcontext  from './context/Cartcontext';
import ProductCart from "./components/ProductCart"
function App() {
  return (
    <div style={{backgroundColor: "witesmoke"}}>
     <DataContext>
      <Cardcontext>
      <Navbar />
      <Switch>
        <Route path="/cart" component={ProductCart} />
        <Route path="/products/:id" component={Ditails}/>
        <Route path="/products" component={ProductsApp}/>
        <Redirect from="/" to="/products"/>
        <Redirect from="*" to="/products"/>

      </Switch>

      </Cardcontext>
     </DataContext>
 
    </div>
  );
}

export default App;
