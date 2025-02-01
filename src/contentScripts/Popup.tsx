// import viteLogo from '/vite.svg';
import '../App.css';

function Popup() {

  return (
    <>
      <div className='p-10'>
        <h1 className='text-red-500'>Content Script Popup</h1>
        <div className='flex gap-2'>
            <p className="read-the-docs">
                Dummy Content Text. 
            </p>
            <a href="https://vitejs.dev" target="_blank">
                Test Link
            </a>
        </div>
      </div>
    </>
  );
}

export default Popup;
