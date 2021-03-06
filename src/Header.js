import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
     Link
} from "react-router-dom";

function Header({user, cartItems, signOut}) {

     const getCount =()=>{
          let count=0;
          cartItems.forEach(item => {
               count+=item.product.quantity;
          });
          return count;
     }

     return (
          <div>
               <Container>
                    <HeaderLogo>
                         <Link to ="/">
                         <img src={"https://i.imgur.com/7I9Was5.png"} />
                         </Link>
                    </HeaderLogo>

                    <HeaderOptionAdress>
                         <LocationOnIcon />
                         <HeaderOptions>
                              <OptionLineOne>Hello</OptionLineOne>
                              <OptionLineTwo>Select Your Address</OptionLineTwo>
                         </HeaderOptions>
                    </HeaderOptionAdress>

                    <HeaderSearch>
                         <HeaderSearchInput type='text' />
                         <HeaderSearchIconContainer>
                              <SearchIcon />
                         </HeaderSearchIconContainer>
                    </HeaderSearch>

                    <HeaderNavItems>
                         <HeaderOptions onClick={signOut}>
                              <OptionLineOne>Hello, {user.name}</OptionLineOne>
                              <OptionLineTwo>Account & Lists</OptionLineTwo>
                         </HeaderOptions>
                         <HeaderOptions>
                              <OptionLineOne>Returns</OptionLineOne>
                              <OptionLineTwo>& Orders</OptionLineTwo>
                         </HeaderOptions>

                         <HeaderOptionCart>
                              <Link to="/cart">
                                   <ShoppingBasketIcon />
                                   <CartCount>{getCount()}</CartCount>
                              </Link>
                         </HeaderOptionCart>

                    </HeaderNavItems>

               </Container>
          </div>
     )
}

export default Header

const Container = styled.div`
height: 60px;
background-color:#0F1111;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
`

const HeaderLogo = styled.div`
img{
     width:100px;
     margin-left: 11px;
}
`
const HeaderOptionAdress = styled.div`
padding-left: 9px;
display:flex;
align-items: center;
`
const OptionLineOne = styled.div`
font-weight: 700;
`
const OptionLineTwo = styled.div`

`
const HeaderSearch = styled.div`
display: flex;
flex-grow: 1;
height:40px;
border-radius:4px;
overflow: hidden;
margin-left: 4px
background-color: white;
:focus-within {
     box-shadow: 0 0 0 3px #F90;
}
`
const HeaderSearchInput = styled.input`
flex-grow: 1;
border:0;
:focus{
     border:none;
}
`
const HeaderSearchIconContainer = styled.div`
background-color: #febd69;
width:45px;
color: black;
display: flex;
justify-content:center;
align-items:center;
`
const HeaderNavItems = styled.div`
display: flex;

`
const CartCount = styled.div`
padding-left:4px;
color:#f08804;
font-weight: 700;
`

const HeaderOptions = styled.div`
padding: 10px 9px 10px 9px;
cursor: pointer;
`
const HeaderOptionCart = styled.div`
display: flex;
a {
     display:flex;
     align-items:center;
     padding-right:9px;
     color:white;
     text-decoration: none;
}
`
