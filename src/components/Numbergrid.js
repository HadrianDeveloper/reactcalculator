function Numbergrid() {

    return (
        <>
            <div className="equalsbox">
                <div className="box">  
                </div>
            </div>
    
            <div className="numgrid" >
                <div className="box">
                    <p className='clear'>CLEAR</p>  
                </div>
    
                <div className="box">  
                <p className='add'>+</p>  
                </div>
    
                <div className="box"> 
                <p className='subtract'>-</p>   
                </div>
                           
                <div className="box">  
                <p className='times'>x</p>  
                </div>
    
                <div className="box"> 
                <p className='divide'>/</p>   
                </div>
    
    {/* NUMBERS */}

                <div id='zero'className="box"> 
                    <p className='number'>0</p>   
                </div>
    
                <div id='one' className="box" onclick="alerter">
                    <p className='number'>1</p>    
                </div>
    
                <div id='two'  className="box">  
                    <p className='number'>2</p>  
                </div>
    
                <div className="box">  
                    <p id='three'  className='number'>3</p>  
                </div>
    
                <div className="box">  
                    <p id='four'  className='number'>4</p>  
                </div>
    
                <div className="box">  
                    <p id='five'  className='number'>5</p>  
                </div>
    
                <div className="box">  
                    <p id='six'  className='number'>6</p>  
                </div>
    
                <div className="box">  
                    <p id='seven'  className='number'>7</p>  
                </div>
    
                <div className="box"> 
                    <p id='eight'  className='number'>8</p>  
                </div>
    
                <div className="box">  
                    <p id='nine'  className='number'>9</p>  
                </div>
    
    
            </div>
    
            <div className="equalsbox">
                <div className="box">
                    <p className='equals'>=</p>    
                </div>
            </div>
        </>
        )

};

function alerter() {
    alert('heryuyeryeyuruerueueiyw')
}

export default Numbergrid;