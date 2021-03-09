import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const SidebarContainer = styled.aside`
  background-color: #0d0d0d;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items:center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${props => props.isOpen? '100%': '0'};
  top: ${({isOpen}) => isOpen? '0': '-100%'};
`

export const Icon = styled.div`
  background-color: red;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;


  @media screen and (max-width) {
    grid-template-rows: repeat(6, 60px)
  }
`

export const SidebarLink = styled(LinkS)`
  display:flex;
  align-items:center;
  justify-content: center;
  font-size: 1.3rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;

  }
`

export const SideBtnWrap = styled.div`
  display:flex;
  justify-content:center;
`

export const SidebarRoute = styled(LinkR)`
  background-color: #01bf71;
  border-radius: 50px;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`


  
