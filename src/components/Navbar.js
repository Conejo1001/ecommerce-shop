import React from 'react'
import styled from 'styled-components'
import {Badge} from '@material-ui/core'
import { Search,ShoppingCartOutlined  } from "@material-ui/icons";

const Navbar = () => {

const Container = styled.div `
    height: 50px;`

const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;`

const Left = styled.div `
    flex: 1;
    display: flex;
    align-items: center;`

const Language = styled.span `
    font-size: 14px;
    cursor: pointer;`

const SearchContainer = styled.div `
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;`

const Input = styled.input `
    border: none;`

const Center = styled.div `
    flex: 1;`

const Logo = styled.h1 `
     font-weight: bold;
     text-align: center;`

const Rigth = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;`

const MenuItem = styled.div `
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;`

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>      
                        <Search style={{color:"gray", fontSize:16}}/>                  
                    </SearchContainer>                    
                </Left>
                <Center>
                    <Logo>CONEJO</Logo>
                </Center>
                <Rigth>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                      <Badge badgeContent={4} color="primary">
                         <ShoppingCartOutlined /> 
                      </Badge>
                    </MenuItem>
                </Rigth>
            </Wrapper>
        </Container>
    )
}

export default Navbar