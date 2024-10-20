import Hero from "./hero"

function Carousel(){

    const styles={
        backgroundColor: "black",
        maxHeight: "500"
        
    }

    return(
        <div className={styles.Carousel}>
            <Hero style={styles}></Hero>
        </div>
    )


}

export default Carousel