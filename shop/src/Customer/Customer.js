import React from 'react'

const Customer = (props) => {
    console.log("props---->>>>",props) //to check the values
  return (
    <div>
        <h1>WELCOME</h1>
        <h1>Customer Details</h1>
        <form>
            <label>Customer Name</label>
            <input type></input><br></br><br></br>
            <label>Mobile no.</label>
            <input type></input><br></br><br></br>
            <label>Feedback</label>
            <input type="textarea"></input><br></br><br></br>
            <h2>Thanks for Shopping {props.data.name1} !!!</h2>
        </form>
    </div>
  )
}

export default Customer