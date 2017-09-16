import React, {Component } from 'react';
import { Link } from 'react-router';
import Footer from './Footer';
import SideBar from './SideBar';
import SideBarProfile from './SideBarProfile'
import '../style/css/App.css'
class Main extends Component {
  componentWillMount(){
    this.props.loadUserData()
  }
  render() {
    const {user} = this.props.profile
    let containerStyles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flex: "1"
    }
    let linksContainer = {
      display: "flex",
      flex: "1",
      width: "100%",
      justifyContent: "space-around"
    }
    let headerStyles= {
      display: "flex",
      flex: "1",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    }
    let links = {
      textDecoration: "none",
      color: "blue"
    }
    let navBar = {
      display: "flex",
      flex: "1"
    }

    let mainContainer = {
      display: "flex",
      flex: 4
    }

    return (
      <div className="main">
        <header className="main__header">
          <SideBarProfile{...user}/>
          <div className="main__header-title">
            <h1>{this.props.location.pathname.slice(1)}</h1>
          </div>
        </header>
        <div className="container">
          <nav style={navBar}>
            <SideBar user={user}/>
          </nav>
          <section style={mainContainer}>
            {React.cloneElement({...this.props}.children, {...this.props})}
          </section>
        </div>
        <footer>
            <Footer/>
        </footer>
      </div>
    )
  }
};

export default Main;
