import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// CSS Geral
import './estilos.scss'
// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {faBars, faCaretSquareDown, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


library.add(faBars, faCaretSquareDown, faTimesCircle)

ReactDOM.render(<App />, document.getElementById('root'));

