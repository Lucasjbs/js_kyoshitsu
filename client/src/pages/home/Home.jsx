import React from 'react'
import Header from '../../components/header/Header'
import JsCatalog from '../../components/catalog-javascript/JsCatalog'
import ReactCatalog from '../../components/catalog-react/ReactCatalog'
import CssCatalog from '../../components/catalog-css/CssCatalog'
import TipsCatalog from '../../components/catalog-tips/TipsCatalog'

const Home = () => {
  return (
    <>
      <Header />
      <JsCatalog />
      <ReactCatalog />
      <CssCatalog />
      <TipsCatalog />
    </>
  )
}

export default Home