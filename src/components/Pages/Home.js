


const Home = () => {
    return (
        <main>
           
            <h1  style={{ fontSize: "36px", fontWeight: 500, color: " #121417", textAlign: "center", marginTop:'0'}}>
               Are you planning your trip now?
            </h1>
             <div style={{display: "flex", alignItems: "center",
    justifyContent: "space-between"
}}>
            <h2 style={{ fontSize: "48px", fontWeight: 700, fontStyle: 'italic', color: " #121417", textAlign: "center" }}>Relax, take it <span className="custom-font">easy ...</span></h2>
            <img src='https://i.pinimg.com/originals/4a/43/ed/4a43ed5055ed198d326ddfe32fa774cc.jpg' alt="blue car"  style={{ width: '70%', height: 'auto', borderRadius: "40%"}}/>
            </div>
        </main>
        
    )
}
export default Home;