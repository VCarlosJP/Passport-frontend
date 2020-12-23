import React from 'react'



    export default class Operations extends React.Component {
    render(){
       let url="";
        // console.log(this.props.match.url);
        return (
            <div className="content-header">
        <div className="dimelo">
        <h1 className="title is-1 content-title">Operations</h1>
            <ul className="options-list">
                <li className={url=='/operations' ? 'active-option' : null}>Expenses</li>
                <li className={url=='/debts' ? 'active-option' : null} >Debts</li>
                <li className={url=='/graphs' ? 'active-option' : null}>Graphs</li>
            </ul>
        </div>
        <h2 className="title is-2 testing">€1,024.00</h2>

    </div>
)

    }


}
