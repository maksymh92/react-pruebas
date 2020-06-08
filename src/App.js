import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Account } from './views';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 20px 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;



class Customise extends Component {


  render() {
    return (
        <div>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
    )
  }
}

class  Signin extends Component {
  render() {
    return (
        <form class="form-signin">
        <img class="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
      </form>
    )
  }
}


class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Secciones de la carta:</h3>

        <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active">
          Entrantes
        </a>
        <a href="#" class="list-group-item list-group-item-action">Principales</a>
        <a href="#" class="list-group-item list-group-item-action">Carnes</a>
        <a href="#" class="list-group-item list-group-item-action">Pastas</a>
        <a href="#" class="list-group-item list-group-item-action">Arroces</a>
        <a href="#" class="list-group-item list-group-item-action">Postres</a>
        <a href="#" class="list-group-item list-group-item-action">Bebidas</a>
        </div>
    </div>
    )
  }
}

class Share extends Component {
   
  render() {
    return (
      <QRCode value="https://whispering-dusk-60586.herokuapp.com/" size="100"/>
    )
  }
}

class Youtube extends Component {

  render() {
    return (
      <iframe 
        title="frameVideo"
        width="100%" 
        height="315" 
        src="https://www.youtube.com/embed/SkgTxQm9DWM" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    )
  }
}

class Location extends Component {

  render() {
    return (
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            onload="this.width=screen.width;this.height=screen.height;"
            title="frameLocation" 
            width="100%" 
            height="500"
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=madrid&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0"></iframe>
        </div>
        <style>
          .mapouter{'position:relative;text-align:right;height:500px;width:600px;'}
          .gmap_canvas {'overflow:hidden;background:none!important;height:500px;width:600px;'}
        </style>
      </div>
    )
  }
}

export default class App extends Component {

  state = {
    expanded: false,
    navigation: 'dashboard',
    component: <Dashboard/>
  };



  render() {
    return (
        <div>
          <SideNav style={{'background-color': '#007bff'}}
              onSelect={(selected) => {
                
                var selectedComponent

                switch (selected) {
                  case "dashboard":
                    selectedComponent = <Dashboard/>
                      break;
                  case "location":
                    selectedComponent = <Location/>
                      break;
                  case "customise":
                    selectedComponent = <Customise/>
                      break;
                  case "share":
                    selectedComponent = <Share/>
                      break;
                  case "youtube":
                    selectedComponent = <Youtube/>
                      break;
                  case "account":
                    selectedComponent = <Account/>
                      break;
                  case "logout":
                    selectedComponent = <Signin/>
                      break;
                  default:
                    selectedComponent = <h3>Clase dashboard en construcción</h3>;
                }

                  this.setState(state => ({
                    navigation: selected,
                    component: selectedComponent
                  })); 
              }}

              expanded={this.state.expanded}
              onToggle={(expanded) => {
                  this.setState({ expanded });
              }}
              >
              <SideNav.Toggle/>
              <SideNav.Nav defaultSelected="dashboard">
                  <NavItem eventKey="dashboard">
                      <NavIcon>
                          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }}/>
                      </NavIcon>
                      <NavText>
                          Dashboard
                      </NavText>
                  </NavItem>

                  <NavItem eventKey="location">
                      <NavIcon>
                          <i className="fa fa-fw fa-map-marker" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                        Contacto y ubicación
                      </NavText>
                  </NavItem>


                  <NavItem eventKey="customise">
                      <NavIcon>
                          <i className="fa fa-fw fa-paint-brush" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                      Aspecto de la carta
                      </NavText>
                  </NavItem>


                  <NavItem eventKey="share">
                      <NavIcon>
                          <i className="fa fa-fw fa-share-alt-square" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                      Compartir la carta
                      </NavText>
                  </NavItem>


                  <NavItem eventKey="youtube">
                      <NavIcon>
                          <i className="fa fa-fw fa-video-camera" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                        Canal YouTube
                      </NavText>
                  </NavItem>   

                  <NavItem eventKey="account">
                      <NavIcon>
                          <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                        Mi Cuenta
                      </NavText>
                  </NavItem>

                  <NavItem eventKey="logout">
                      <NavIcon>
                          <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                        Salir
                      </NavText>
                  </NavItem>

              </SideNav.Nav>
          </SideNav>
          <Main expanded = {this.state.expanded}>
            <div>{this.state.component}</div>
          </Main>
        </div>
    );
  }
}

