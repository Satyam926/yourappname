import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { CategoryContext } from '../CategoryContext'

function LatestArticleCat1() {
    const bolly3 = []
    const bollyAll = []
    const  setResult = []
    const [visible, SetVisible] = useState(false)
    const [data] = useContext(CategoryContext)
    data.forEach((a) => {
        // console.log(data);
        if (a.Category === "Bollywood") {
            bollyAll.push({
                name: a.Name,
                img: a.Img,
                id:a.Id,
                date:a.Date,
                detail:a.Details,
                category:a.Category

            })
            console.log(bollyAll);
        }

    })
    bollyAll.forEach((a, index) => {
        if (index < 3) {
            bolly3.push({
                name: a.name,
                img: a.img,
                id:a.id,
                date:a.date,
                detail:a.detail,
                category:a.category

            })
        }

    })


    const loadMore = () => {
        SetVisible(true)
        setResult(bollyAll)
    }
    const loadLess = () => {
        SetVisible(false)
        setResult(bolly3)
    }
    console.log("ssss", bolly3);
    return (
        <div>
                {visible ? <>{bollyAll.map((raa) => 
                            <div  key={raa.id} className='FlexRow'>
                                <div  style={{cursor:"pointer"}}><Link to={`/artReading/${raa.id}`}> <img className='cardImgBox' src={raa.img}alt=""/></Link> </div>
                                <div>
                                    <div className='cardTitle'>{raa.name}</div>
                                    <div className='cardDec cardContain'>About : {raa.detail.slice(0,110)}</div>
                                    <p className='cardDate'>{raa.category}<span className='cardDec'> / {raa.date} </span></p>
                               </div>
                           </div>
                        ) }
                      <button  style={{cursor:"pointer"}} className='loadMore' onClick={loadLess} >&#8593; Load Less </button> </>
                    :<>{bolly3.map((ra)=> 
                        <div key={ra.id}  className='FlexRow' >
                            <div  style={{cursor:"pointer"}}> <Link to={`/artReading/${ra.id}`}> <img className='cardImgBox' src={ra.img}alt=""/></Link> </div>
                            <div>
                                <div className='cardTitle'>{ra.name}</div>
                                <div className='cardDec cardContain'>About : {ra.detail.slice(0,110)}</div>
                                <p className='cardDate'>{ra.category}<span className='cardDec'> / {ra.date}</span></p>
                            </div>
                        </div>
                        )} 
                    <button  style={{cursor:"pointer"}} className='loadMore' onClick={loadMore} >&#8595; Load More</button></>
                
                }
        </div>
    )
}

export default LatestArticleCat1