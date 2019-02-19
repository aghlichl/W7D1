import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import App from './components/app';
import { configureStore } from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.store = configureStore;
    ReactDOM.render(<App />, root);
});