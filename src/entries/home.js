import React from 'react'
import {render} from 'react-dom'
import Home from "../pages/containers/home";
import data from '../api.json'
import 'materialize-css/dist/css/materialize.min.css'
import 'jquery/dist/jquery.min'
import  'materialize-css/dist/js/materialize.min'

const HomeContainer = document.getElementById('home-container')
render(<Home data={data}/>, HomeContainer)