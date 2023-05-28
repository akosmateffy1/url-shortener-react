import React,{useState, useEffect} from "react"
import Card from "./Card";
import './HeroStyles.css'

export default function Hero(){
    const [isloading, setIsLoading] = useState(false);
    const [originalURL, setOriginalURL] = useState('');
    const [shortenedURL, setShortenedURL] = useState(true);

    const handleShorten = () => {
        if (originalURL) {
        setIsLoading(true);
        fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(originalURL)}`)
            .then(resp => resp.json())
            .then(data => {
            if (data.shorturl) {
                setIsLoading(false)
                setShortenedURL(data.shorturl);
            } else if (data.errormessage) {
                console.log(`Error: ${data.errormessage}`);
                setIsLoading(false);
            }
            })
            .catch(err => console.log(err));
        }
    };

    useEffect(() => {
        setShortenedURL(false);
    }, [originalURL]);

    return(
        <div className="hero">                
            <div className="container text-center">
            <h1 className="text-white">URL Rövidités</h1>
                <div className="input-group mb-5">
                    <input 
                        style={{height:'70px', fontSize:'30px'}}
                        type="text" 
                        className="form-control" 
                        placeholder="Írja be az URL-t" 
                        aria-label="Example text with button addon" 
                        aria-describedby="button-addon1"
                        value={originalURL}
                        onChange={e => setOriginalURL(e.target.value)}
                    />
                    <button 
                        onClick={handleShorten}
                        className="btn btn-primary w-25" 
                        type="button" 
                        id="button-addon1"
                    >URL Rövidités</button>
                </div>
                {isloading && <span class="loader"></span>}
                <div className="card-container">
                    <Card shortenedURL={shortenedURL} />
                </div>
            </div>
        </div>
    )
}