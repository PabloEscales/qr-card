import Card from './Card';
import QR_CODE from './images/qrcode_pablofolio.png'


function App({ qr }) {
  return (
    <div className='app'>
      <Card qr={QR_CODE}/>
    </div>
  );
}

export default App;
