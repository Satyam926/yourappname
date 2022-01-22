import React from 'react'
import AllLatestArticle from './Components/AllLatestArticle'
import FeaturedArticle from './Components/FeaturedArticle'
import LatestArticleCat1 from './Components/LatestArticleCat1'
import LatestArticleCat2 from './Components/LatestArticleCat2'
import LatestArticleCat3 from './Components/LatestArticleCat3'
import TopArticle from './Components/TopArticle'

function Home() {
    
    return (
        <div>
            <FeaturedArticle/>
            
            <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Latest</div>
          
            <AllLatestArticle/>
            <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Articles</div>
            <div className='FlexRow spacebetween' >
                <div className='ArtFlxCol'>
                  <LatestArticleCat1/>
                <div >
                    <img className='artVerticleImg' alt='gallary' src="https://miro.medium.com/max/640/1*ngkHgQq7ij1NBNr62er3zA.png" /> 
                </div>
                </div>
                <div className='  marginLeft'>
                    <div className='Advertistement'>Advertistement</div>
                    <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Top</div>
                    <TopArticle/>
                </div>
                </div>
            <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Technology Article</div>
            <LatestArticleCat3/>
              
            <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Fitness Article</div>
              <LatestArticleCat2/>
              
            

    </div>
    )
}

export default Home












































































































