import Lime from '../images/Lime.png';
import Layer6 from '../images/Layer 6.png';
import Layer7 from '../images/Layer 7.png';
import Layer8 from '../images/Layer 8.png';
import Layer9 from '../images/Layer 9.png';
import Layer10 from '../images/Layer 10.png';
import Nature from '../images/Nature.png';
import People from '../images/People.png';
import Trips from '../images/Trips.png';
import Tech from '../images/Tech.png';
import Fashion from '../images/Fashion.png';

const api = {
    keyName:[
        {img_1:Lime,img_2:Nature,text:'lorem18'},
        {img_1:Layer7,img_2:People,text:'lorem19'},
        {img_1:Layer6,img_2:Tech,text:'lorem20'},
        {img_1:Layer8,img_2:Trips,text:'lorem21'},
        {img_1:Layer9,img_2:Trips,text:'lorem22'},
        {img_1:Layer10,img_2:Fashion,text:'lorem23'}
    ],
    all:function () {
        return this.keyName;
    }
};
export default api;