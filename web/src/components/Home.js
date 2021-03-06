/*
  @author Félix Fuin
  Copyright Nokia 2017. All rights reserved.
*/

import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import {Config} from './../config.js';
import '../css/Home.css';
import MdSchool from 'react-icons/lib/md/school';
import { Reveal } from 'semantic-ui-react'

export default class Home extends Component {
  state = {
    oneStore: ""
  }
  componentWillMount(){
    if(this.props.stores.length === 1){
      this.setState({oneStore: this.props.stores[0].id});
    }
  }

  render() {
    if(this.state.oneStore !== ""){
      return(
        <Redirect to={"/" + this.state.oneStore} />
      )
    }
    document.getElementById("root").style.marginTop='0px';
    const myStores = this.props.stores.map((store, index) => {
      return (
        <Link key={index} to={"/" + store.id + "/"}>
          <div title={store.title} className="storePellet" >
            <Reveal animated='small fade'>
              <Reveal.Content visible>
                <div  className="storePellet1">
                  <MdSchool color='orange' className="storePellet1_icon" size="60" />
                  <div className="storePellet1_title">
                    { store.title }  
                  </div>
                </div>
              </Reveal.Content>
              <Reveal.Content hidden>
              <div  className="storePellet2">
                <MdSchool color='white' className="storePellet2_icon" size="60" />
                <div className="storePellet2_subtitle">
                    { store.subtitle }  
                  </div>
              </div>
              </Reveal.Content>
            </Reveal>
          </div>
        </Link>
        // <div key={index} className="selectStore" title={store.title}>
        //   <Link to={"/" + store.id + "/"}>
        //     <div className="SelectStoreTitle">
        //       { store.title }
        //     </div>
        //     <div className="SelectStoreBody">
        //       { store.subtitle }
        //     </div>
        //     <div className="SelectStoreButton">
        //       Open this store 
        //       <FaAngleRight color='orange' />
        //     </div>
        //   </Link>
          
        // </div>
      )
    });

    return (
      <div className="home">
        <div className="select">
          <div className="selectTitle">
            { Config.Name }
          </div>
          { myStores }
        </div>
      </div>
    );
  }
}
