import React from 'react'
import {
  SidebarContainer, 
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

function Sidebar({toggleIsOpen, isOpen}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
      <Icon onClick={toggleIsOpen}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggleIsOpen}>
            About
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggleIsOpen}>
            Discover
          </SidebarLink>
          <SidebarLink to='services' onClick={toggleIsOpen}>
            Services
          </SidebarLink>
          <SidebarLink to='signup' onClick={toggleIsOpen}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute tp='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
