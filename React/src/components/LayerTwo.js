import React,{Component} from 'react';
import api from './api';
class LayerTwo extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='wrap'>
                {api.all().map((item,index)=>(
                    <div key={index}>
                        <img className='layerImg' width='250px' src={item.img_1} alt='img'/>
                        <img className='stripe' src={item.img_2} alt='img' />
                        <p>{item.text}</p>
                        <div className='layer3-4ImageText'>
                             <p><span className='data'> 9 Dectember 2018 |</span> <a className='johnDoe'>William Morris</a></p>
                        </div>
                    </div>
                ) )
                }
            </div>
        );
    }
}
export default LayerTwo;