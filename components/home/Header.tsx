import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = (): JSX.Element => {

  const bgBlue = {
    backgroundColor: '#5383E8'
  }

  return (
    <nav className="navbar navbar-expand-lg" style={bgBlue}>
      <div className="container-fluid">
        <Link href={"/"} passHref >
          <Image src="/TitleLog.png" alt="タイトルロゴ" height={60} width={130} objectFit="contain" />
        </Link>
      </div>
    </nav>
  )
}

export default Header