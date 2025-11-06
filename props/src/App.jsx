import { Component } from "react";
import { Studentid } from "./components/Studentid";
import photo1 from "./assets/images/Myimg1.jpg"


export class App extends Component{
  render(){
    return ( <div style={{display:"flex",justifyContent:"center",gap:30}}>
      <Studentid 
       name="Dunne Subrahmanyam"
        class="BTech/CSE"
        imgUrl={photo1}
        rollNo={"21B21A4382"}
      />
       <Studentid 
       name="Amara Balaji"
        class="BTech/CSE"
        imgUrl={photo1}
        rollNo={"216Q1A4399"}
      />

       <Studentid 
       name="Kunapureddy Sathish"
        class="BTech/CSE"
        imgUrl={photo1}
        rollNo={"216Q1A4398"}
      />
      </div>
    )
  }
}