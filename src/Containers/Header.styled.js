import styled, {css} from "styled-components";
import {rem} from "polished";
import posed from "react-pose";

export const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  height: ${rem(55)};
  padding: 0 ${rem(20)};
  background-color: #fff;
`;
export const MenuIcon = styled.div`
  flex: 0 0 ${rem(40)};
`;

export const LogoWrap = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding-top: ${rem(8)};
  padding-left: ${rem(20)};
`;
export const Logo = styled.img`
    src: url(${props => props.src});
    height: ${rem(30)};
    width: auto;
`;

/* Hamburger Menu Styles and pose animations */
const HamburgerMenuPoseProps = {
    closed: {
        rotate: 0,
        x: 0,
        transition: { duration: 500 }
    },
    open: {
        rotate: 180,
        x: 0,
        transition: { duration: 500 }
    }
};
export const HamburgerMenu = styled(posed.div(HamburgerMenuPoseProps))`
  position: relative;
  height: 100%};
  width: ${rem(22)};
`;
const HamburgerMenuItemDefaults = css`
  position: absolute;
  top: 50%;
  right: 0;
  height: ${rem(3)};
  background-color: #000;
`;

export const HamburgerMenuMiddle = styled.span`
  width: 22px;
  ${HamburgerMenuItemDefaults};
`;

const HamburgerMenuTopPoseProps = {
    closed: {
        rotate: 0,
        y: -6,
        x: 0,
        width: 22,
        transition: { duration: 300 }
    },
    open: {
        rotate: 40,
        y: 1.1,
        x: 2,
        width: 16,
        transition: { duration: 300 }
    }
};
export const HamburgerMenuTop = styled(posed.span(HamburgerMenuTopPoseProps))`
  transform-origin: top right;
  ${HamburgerMenuItemDefaults};
`;
const HamburgerMenuBottomPoseProps = {
    closed: {
        rotate: 0,
        y: 6,
        x: 0,
        width: 22,
        transition: { duration: 500 }
    },
    open: {
        rotate: -40,
        y: -1.1,
        x: 2,
        width: 16,
        transition: { duration: 500 }
    }
};
export const HamburgerMenuBottom = styled(posed.span(HamburgerMenuBottomPoseProps))`
  transform-origin: bottom right;
  ${HamburgerMenuItemDefaults};
`;
