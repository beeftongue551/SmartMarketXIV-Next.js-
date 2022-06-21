import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "react-bootstrap";


const Header: React.FC = (): JSX.Element => {

  const blueButtonStyle = {
    backgroundColor: '#5383E8',
    border: '#5383E8'
  }

  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#5383E8'}}>
      <div className="container-fluid">
        <Link href={"/"} passHref >
          <Image src="/TitleLog.png" alt="タイトルロゴ" height={60} width={150} objectFit="contain" />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="hoverable" aria-current="page" href="/market"><Button style={blueButtonStyle}><h6>Market</h6></Button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header