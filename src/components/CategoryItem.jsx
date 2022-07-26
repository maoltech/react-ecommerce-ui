import styled from 'styled-components';
import {mobile} from '../responsive';

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
Position: relative;

`
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height:'30vh'})}

`
const Title = styled.h1`
color: blue;
margin-bottom: 20px;

`
const Button = styled.button`
border:none;
padding: 10px;
background-color: pink;
color: gray;
cursor: pointer;
font-weight: 600;
border-radius: 10%;

`

const CategoryItem = ({item}) => {
    return ( 
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Order Now</Button>
            </Info>
        </Container>
     );
} 
 
export default CategoryItem;