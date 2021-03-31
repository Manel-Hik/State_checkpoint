import './App.css'; 
import  { Component } from 'react'
import profile_picture from './manel.jpeg'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      person:{
      fullName:"Manel ALOUI",
      bio:"Hi guys, I'm Manel ALOUI, an engineer who loves writing novels, You are welcome to visit my profile!!",
      profession:"Junior data scientist and a full stack web developer",
      imgSrc:profile_picture,

      },
      show: false,
      counte:0
    }
  }
   show_profile = ()=> {
    this.setState({show:!this.state.show})
  }
  componentDidMount(){
    let startCount = setInterval(()=>{ this.setState({counte:this.state.counte+1})
  });
  }
  render() {
    return (
      <div>
        { this.state.show ? <div className="profile-card"><h1 className="esmi"> My name is {this.state.person.fullName}</h1>
        <h2>{this.state.person.bio}</h2>
        <h3>I'm {this.state.person.profession}</h3>
        <img  style={{borderRadius: "100%", width: "200px", height: "200px"}}  src={this.state.person.imgSrc}/>    
             </div>
      : null}
        <button className="btn"
         onClick={this.show_profile}> 
         You are welcome!
         </button>
         <p>{this.state.counte}</p>
      </div>
    )
  }
}




export default App;
