import Title from "./Title"
import Buttons from "./Buttons"
import About from "./About"
import Interests from "./Interests"

export default function Main() {
    return (
        <article className='card-body'>
            <Title />
            <Buttons />
            <About />
            <Interests />
        </article>
    )
}