import bwinfoimg from "../../img/BWInfo Logo 2D.png"
import "../../css/index.css"
import { Link } from "react-router-dom"

export default function Header()
{
    return(
        <>
        <div>
            <div className="centro">
                <Link to="/"><img className="img" src={bwinfoimg}/></Link>
            </div>
        </div>
        </>
    )
}