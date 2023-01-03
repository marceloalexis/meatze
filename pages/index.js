import React from "react"
import Image from "next/image.js";
import Head from "next/head";
import BLayout from "../bemit/08-blocks/b-layout/b-layout.js"
import OContainer from "../bemit/07-objects/o-container/o-container.js";
import OCol from "../bemit/07-objects/o-col/o-col.js";


const Home = () =>{

  const p = 'b-home';

  return(

    <BLayout>
      <Head>
        <title>Coming Soon - Meatze</title>
        <meta property="og:title" content={'Coming Soon - Meatze'} key="title" />
        <meta name="description" content={'Meatze Energy Solution'}/>
        <meta name="keywords" content={'Bitcoin, Energy solution'}/>
      </Head>
      <div className={`${p}`}>
      <OContainer p={p}>
        <OCol p={p} cols={{sm: 4, md: 6, lg: 12}}>
          <div className={`${p}__wrapper-construction`}>
                <div>
                  <Image 
                    src={'/images/meatze1.png'}
                    alt={'Meatze'}
                    width={'280'}
                    height={'90'}
                  />
                </div>
          </div>
        </OCol>
      </OContainer>
      </div>



    </BLayout>
  )
}
export default Home