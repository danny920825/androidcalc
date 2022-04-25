import './App.css'
function App() {
  return (
    <div className="container">
      <div className='calc'>
        
        {/* Input */}

          <input autoFocus className='input' type="text"  />

        <div className='hr'></div>
        {/* Botones */}
        <div className='l1'>
          <button className='AC'> AC </button>
          <button className='DEL'> DEL </button>
          <button className='PORCENT'> % </button>
          <button className='DIVIDER'> / </button>
        </div>
        <div className='l2'>
          <button className='siete'> 7 </button>
          <button className='ocho'> 8 </button>
          <button className='nueve'> 9 </button>
          <button className='MULT'> X </button>
        </div>
        <div className='l3'>
          <button className='cuatro'> 4 </button>
          <button className='cinco'> 5 </button>
          <button className='seis'> 6 </button>
          <button className='MENOS'> - </button>
        </div>
        <div className='l4'>
          <button className='uno'> 1 </button>
          <button className='dos'> 2 </button>
          <button className='tres'> 3 </button>
          <button className='MAS'> + </button>
        </div>
        <div className='l5'>
          <div className='EMPTY'> &nbsp; </div>
          <button className='cero'> 0 </button>
          <button className='point'> . </button>
          <button className='IGUAL'> = </button>
        </div>
      </div>
    </div>
  );
}

export default App;
