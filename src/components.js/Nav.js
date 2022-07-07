import logo from "../logo.svg"

export default function Nav(){
    return(
    <nav>
        <section className="left-nav">
            <img src={logo} className="logo" alt="logo"/>
            <h4 id="title">Meme Generator</h4>
        </section>
        <section className="right-nav">
            <p>React Course - Project 3</p>
        </section>
       
    </nav>)
}