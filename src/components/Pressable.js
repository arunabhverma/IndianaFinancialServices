import {Button} from 'react-bootstrap';
const Pressable =(props)=>{
    let {title, onPress, Class}=props
    return(
        <Button 
        onClick={onPress}
        className={`${Class} pressable d-flex w-100 align-items-center justify-content-center f-12`}
        >
            {title}
        </Button>
    )
}
export default Pressable