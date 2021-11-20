import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/carousel.css'
import './css/mmenu.css'
import './css/mmenu.positioning.css'
import './css/responsivetable.css'
import './css/estilo.css'
import Home from './Components/Paginas/Home/Home';
import Livro from './Components/Paginas/Livro/Livro';
import Autor from './Components/Paginas/Autor/Autor';
import Editora from './Components/Paginas/Editora/Editora';
import Reg from './Components/Paginas/Registro/Reg';
import LivroDetalhe from './Components/Paginas/LivroDetalhe/LivroDetalhe';
import AutorDetalhe from './Components/Paginas/AutorDetalhe/AutorDetalhe';
import EditoraDetalhe from './Components/Paginas/EditoraDetalhe/EditoraDetalhe';

function App() {
  return (

  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/livro' component={Livro} />
      <Route path='/autor' component={Autor} />
      <Route path='/editora' component={Editora} />
      <Route exact path='/registro/:bookId/' component={Reg} />
      <Route exact path='/livrodetalhe/:bookId/' component={LivroDetalhe}/>
      <Route exact path='/autordetalhe/:authorId/' component={AutorDetalhe} />
      <Route exact path='/editoradetalhe/:publisherId/' component={EditoraDetalhe} />
    </Switch>
  </Router>
    );
  }
  export default App;
