import { Outlet } from "react-router-dom";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { SelectIsCartOpen } from "../../store/cart/cart.selector";

export default function Navigation() {
  const isCartOpen = useSelector(SelectIsCartOpen);
  
  const currentUser = useSelector(selectCurrentUser);

  const signOutHandler = async () => {
    await signOutAuthUser();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen ? <CartDropdown /> : null}
      </NavigationContainer>
      <Outlet />
    </>
  );
}
