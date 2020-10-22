import React, { Component } from 'react'

class Form extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            textvalue:"",
            textareavalue:"",
            selectvalue: ""

       }
   }
   textChange=(event)=>{
       this.setState({
           textvalue:event.target.value
       })
   }
   textAreaChange=(event)=>{
    this.setState({
        textareavalue:event.target.value
    })
}

selectChange=(event)=>{
    this.setState({
        selectvalue:event.target.value
    })
}

submit=(event)=> {
    event.preventDefault()

    alert(this.state.textvalue+'\n'+this.state.textareavalue+'\n'+this.state.selectvalue)
}
    render() {
        return (
          <form onSubmit = {this.submit}>
              <input type="text" value={this.state.textvalue} onChange={this.textChange} />
              <br></br>
              <textarea value={this.state.textareavalue} onChange={this.textAreaChange}></textarea>
              <br></br>
              <select value = {this.state.selectvalue} onChange={this.selectChange}>
              <option value=''></option>
                  <option value="angular">ANGULAR</option>
                  <option value="reactjs">RECATJS</option>
                  <option value="vuejs">VUEJS</option>
              </select>
              <br></br>
              <button type="submit">Submit</button>
          </form>
        )
    }
}

export default Form
