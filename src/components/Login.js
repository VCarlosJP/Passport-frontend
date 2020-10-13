import React from 'react'
import {  Input } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';



export default function Login(){
    return (
        <div className="container">
            <h4 className="title is-4">Sign in to Passport</h4>
            <div id="login-box" >
                <form id="login-form">
                    <div>
                        <label>Username</label>
                        <Input/>
                    </div>
                    <div style={{marginTop:"10px", marginBottom:"15px"}}>
                        <label>Password</label>
                        <Input/>
                    </div>
                    <Button 
                    className="button is-success"
                    style={{width: "100%"}}>
                    Sign In
                    </Button>
                </form>
            </div>
        </div>

        
    )
}

