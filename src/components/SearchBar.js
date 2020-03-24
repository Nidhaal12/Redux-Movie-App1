import React from 'react'
import Stars from './stars'
import Search from '../actions/searchaction'
import Clear from '../actions/clearsearch'
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
      Search: (searchtext)=> dispatch(Search(searchtext) ),
      Clear: ()=> dispatch(Clear())

  };
}


class Searchbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {filmsearch:"",counterstars : "" , starscolor:"" }
  

   }

  
datahandle =(e)=> {
  e.preventDefault();
this.props.Search(e.target.value)
this.setState({filmsearch: e.target.value})
}

changestarscolor = (colordata) => {
  this.setState({starscolor : colordata})
 }


 clearall=() =>{
  this.props.Clear()
  this.setState({starscolor: 0})
 }

render () {
return (<nav className="navbar navbar-light bg-light ">
<div className="title"><i className="fas fa-video fa-3x"></i>
<h1>Egy4Movie !!</h1> </div>

<form className="form-inline">
  <input className="form-control mr-sm-2" list="browsers" name="browser" type="search" placeholder="Search" aria-label="Search" 
  onChange={this.datahandle}/>
  
</form>
<Stars starscolor={this.state.starscolor} starcolor={this.changestarscolor}/>
</nav>);

}
}

export default connect(null,mapDispatchToProps)(Searchbar);







 