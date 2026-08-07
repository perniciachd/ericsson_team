type NavProps = {
  nav: number;
};

function Nav({ nav }: NavProps) {
  return (
    <span className="text-sm text-gray-500">
      NAV ₹{nav.toFixed(2)}
    </span>
  );
}

export default Nav;