import React, {Component} from 'react';

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='footer'>
                <div className='inputs'>
                    <h1>Newsletter</h1>
                    <p>Sign up</p>
                    <form name='sub'>
                        <input type='email' name='sub'/>
                        <input  name='sub' type='submit' value='Sign up'/>
                    </form>
                </div>

                <div className='footerText'>
                    <p>Everything is linked and ready to use. Just open the file index.html and start to create some
                        amazing thing</p>
                    <p>Together we can face any challenges as deep as the ocean and as high as the sky</p>
                </div>
            </div>
        );
    }
}

export default Footer;