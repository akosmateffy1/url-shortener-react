import React from "react"

export default function Card({shortenedURL}) {
    return(
        <>
            {shortenedURL && 

                <div className="card" style={{height:'4rem', alignItems:'center', justifyContent:'center'}}>
                    <h3>
                        Rövidített URL: 
                        <a 
                            href={shortenedURL} 
                            rel="noopener noreferrer" 
                            target="_blank"
                        >{shortenedURL}</a>
                    </h3>
                </div>
            }
        </>
    )
}