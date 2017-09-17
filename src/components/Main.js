import React, {Component } from 'react';
import Footer from './Footer';
import SideBar from './SideBar';
import SideBarProfile from './SideBarProfile'
import '../assets/styles/css/App.css'
class Main extends Component {
  componentWillMount(){
    this.props.loadUserData()
  }
  render() {
    const {user} = this.props.profile
    const {location} =this.props

    return (
      <div className="main">
        <header className="main__header">
          <SideBarProfile  {...user}/>
          <div className="main__header-title">
            <h1>{location.pathname.slice(1)}</h1>
          </div>
        </header>
        <div className="main__container">
          <nav className="main__container-navigation">
            <SideBar user={user} location={location}/>
          </nav>
          <section className="main__container-section">
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
