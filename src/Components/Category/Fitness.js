import { useContext } from 'react'
import { CategoryContext } from '../../CategoryContext'
import {Link} from 'react-router-dom'
const Fitness = () => {
    const [data]= useContext(CategoryContext)
console.log(data)
    return ( 
        <div className='FlexRow spacebetween'>
      <div>

        {data.filter((cat)=>cat.Category==="Fitness").map((row) =>
          <div key={row.Id} className='FlexRow' >
            <div style={{ cursor: "pointer" }}><Link to={`/artReading/${row.Id}`}> <img className='cardImgBox' src={row.Img} alt="" /></Link></div>
            <div>
              <div className='cardTitle'>{row.Name}</div>
              <div className='cardDec cardContain'>
                <div>{row.Details} </div>

              </div>
              <p className='cardDate'>{row.Category}<span className='cardDec'> / {row.Date}</span></p>
            </div>

          </div>
        )}
      </div>
      <div style={{ margin: "76px" }} >
        <div className='Advertistement'>Advertistement</div>
        <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Top</div>
        {/* <TopArtWebsite /> */}
      </div>
    </div>
    )
}

export default Fitness
