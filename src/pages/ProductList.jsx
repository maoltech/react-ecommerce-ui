import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import {mobile} from '../responsive';

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
    

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: '0px 20px', display: 'flex', flexDirection: 'column'})}
`

const Filtertext = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

    ${mobile({marginRight: '0px'})}
`

const Select = styled.select`
 padding: 10px;
 margin-right: 20px;

 ${mobile({margin: '10px 0px'})}
`

const Option = styled.option`

`
  
const ProductList = () => {
    return ( 
        <Container>
            <Anouncement />
            <Navbar />
            <Title> Blenders</Title>
            <FilterContainer>
                <Filter>
                    <Filtertext>Filter Products:</Filtertext>
                    
                    <Select>
                        <Option disabled selected>Colour</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                        <Option>XXXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <Filtertext>Sort Products:</Filtertext>
                    <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
                </Filter>

            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer /> 
        </Container>
     );
}
  
export default ProductList;