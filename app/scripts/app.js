import React from 'react'
import { render } from 'react-dom'
import FormationView from './components/Formation/FormationView';
import testdata from '../testdata'

window.React = React;
const mountNode = document.getElementById('app');

render(<FormationView data={testdata} />, mountNode);