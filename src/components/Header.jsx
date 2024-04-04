import { FaGlobeAmericas } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header">
      <FaGlobeAmericas className="globe" />
      <h1 className="header--title">my travel journal</h1>
    </div>
  )
}