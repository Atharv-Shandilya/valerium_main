import Link from "next/link";

const NavItem = ({ children, label, href, size }) => {
  return (
    <li>
      <Link
        className="flex items-center cursor-pointer"
        href={href}
        style={{ fontSize: size === "sm" ? "14px" : "16px" }}
      >
        {children} <span className="ml-2">{label}</span>
      </Link>
    </li>
  );
};

export default NavItem;