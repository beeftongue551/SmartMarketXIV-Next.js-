import {NextPage} from "next";
import React from "react";
import Head from "next/head";
import Header from "./home/Header";
import '../styles/layout.module.css';

type PageInfo = {
  children?: React.ReactNode
  title: string,
  description: string
}

const Layout: NextPage<PageInfo> = (pageInfo) => {
  const bgBlue = {
    backgroundColor: '#5383E8'
  }

  return (
    <div >
      <Head>
        <title>{pageInfo.title}</title>
        <meta name="description" content={pageInfo.description} />
      </Head>
      <Header></Header>
      <main>{pageInfo.children}</main>
      <footer className="footer mt-4 py-3" style={bgBlue}>
        <div className="container text-center " style={{color: "white"}}>
          <span>(C) SQUARE ENIX CO., LTD. All Rights Reserved</span>
          <div style={{flexGrow:1}}></div>
          <span>Author: @beeftongue_ff14</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout