// import Head from 'next/head';
import React, { Component } from 'react';

import Layout from '../layouts/Layout';
import HomeHero from '../components/HomeHero';
import AboutSection from '../components/AboutSection';
import ExperianceCounter from '../components/ExperianceCounter';
import ServicesSection from '../components/ServicesSection';
import BlogSection from '../components/BlogSection';


import "../scss/style.scss";


export default class index extends Component {
  render() {
    return (

<React.Fragment>
  <Layout >
    
    <HomeHero />
    <ExperianceCounter />
    <AboutSection />
    <ServicesSection />
    <BlogSection />
  </Layout>


<style jsx>{`  

`}</style>
</React.Fragment>
    )
  }
}
