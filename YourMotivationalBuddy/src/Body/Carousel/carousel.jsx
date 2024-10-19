import Hero from "./hero"

function Carousel(){

    const styles={
        backgroundColor: "black",
        minHeight: "5000"
    }

    return(
        <div className={styles.Carousel}>
            <Hero></Hero>
        </div>
    )


}

export default Carousel