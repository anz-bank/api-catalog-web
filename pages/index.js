import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/button";
import Modal from "../components/modal";
import React, { useState } from 'react';

export default function Home() {
  const [showModal, setshowModal] = useState(false)
  return (
    <div className="container">
      <div className="sidebar--left">
        <div className="logo sidebar--left__image-groups">
          <img src="/images/sysl-logo.png" />
          <span className="logo__title">API Catalog</span>
        </div>
        <div className="sidebar--left__button-groups">
          <Button>ADD API</Button>
          <Button>ABOUT</Button>
          <Button>FEEDBACK</Button>
        </div>
      </div>
      <div className="main">
        <div className="main__header">
          <h1 className="main__h1">Welcome to the API Catalog!</h1>
          <span>Search for a service or explore our system</span>
        </div>
        <div className="search__field">
          <input
            className="search__input"
            type="text"
            name="search"
            id="search"
            placeholder=" "
            onClick={()=>setshowModal(true)}
          />
          <label className="search__label" htmlFor="search">
            Search...
          </label>
        </div>
        <Modal show={showModal} onClose={()=>setshowModal(false)}  />
        <div className="main__numberGroups">
          <div className="numberCircleGroup">
            <div className="numberCircle">
              <span>256</span>
            </div>
            <p>Active Users</p>
          </div>
          <div className="numberCircleGroup">
            <div className="numberCircle">
              <span>29</span>
            </div>
            <p>Services</p>
          </div>
          <div className="numberCircleGroup">
            <div className="numberCircle">
              <span>76</span>
            </div>
            <p>Endpoints</p>
          </div>
        </div>
      </div>
      <div className="sidebar--right">
        <Button>EXPLORE</Button>
      </div>
    </div>
  );
}
