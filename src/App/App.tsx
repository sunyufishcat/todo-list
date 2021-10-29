import React, {FC, ReactElement} from "react";
import Footer from '../component/Footer/Footer';
import {Todos} from '../component/Todos/Todos';

const App: FC = (): ReactElement => {
  return (
    <div className="app">
       <h1>todos</h1>
       <Todos />
       <Footer />
    </div>
  )
}

export default App;
