import React, {Component } from 'react';
import Footer from './Footer';
import SideBar from './SideBar';
import '../assets/styles/css/App.css';
class Main extends Component {
  componentWillMount(){
    this.props.loadUserData()
  }
  render() {
    const {user} = this.props.profile
    const {location} =this.props

    return (
      <div className="main">
        <div className="layout">
          <SideBar user={user} location={location}/>
          <section className="content">
            {React.cloneElement({...this.props}.children, {...this.props})}
          </section>
       </div>
        <Footer/>
      </div>
    )
  }
};

export default Main;
