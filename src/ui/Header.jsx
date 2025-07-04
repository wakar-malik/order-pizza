import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import LinkButton from "./LinkButton";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <LinkButton to="/" className="tracking-widest">
        Fast React Pizza Co.
      </LinkButton>

      <SearchOrder />
      {<Username />}
    </header>
  );
}

export default Header;
