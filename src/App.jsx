import React from 'react';
import Header from './components/Header';
import ArticleLancamento from './components/ArticleLancamento';
import ArticleDestaque from './components/ArticleDestaque';
import ArticleAvaliacao from './components/ArticleAvaliacao';
import ArticleEditorial from './components/ArticleEditorial';
import ArticleEntrevistaMakingOf from './components/ArticleEntrevistaMakingOf';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <ArticleLancamento/>
        <ArticleDestaque/>
        <ArticleAvaliacao/>
        <ArticleEntrevistaMakingOf/>
        <ArticleEditorial/>
      </main>
    </div>
  );
}

export default App;