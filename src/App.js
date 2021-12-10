import logo from './logo.svg';
import './App.css';

function App() {

    // const [categories, setCategory] = useState(['Category 1', 'Category 2']);


  return (
    <>

        <div className={'border p-4 bg-gray-100'}>
            <h1 className={'text-center text-xl uppercase tracking-wide'}>Question App</h1>
        </div>

        <div className={'w-full flex'}>

            <div className={'w-1/4 h-screen bg-gray-100'}>
                <ul>
                    <li className={'p-8'}>
                        <h1 className={'text-2xl uppercase tracking-widest'}>Category 1</h1>
                    </li>
                    <li className={'p-8 border'}>
                        <h1 className={'text-2xl uppercase tracking-widest'}>Category 2</h1>
                    </li>
                    <li className={'p-8 bg-gray-300'}>
                        <h1 className={'text-2xl uppercase tracking-widest'}>Category 3</h1>
                    </li>
                    <li className={'p-8 border'}>
                        <h1 className={'text-2xl uppercase tracking-widest'}>Category 4</h1>
                    </li>
                    <li className={'p-8 border'}>
                        <h1 className={'text-2xl uppercase tracking-widest'}>Category 5</h1>
                    </li>
                </ul>

            </div>

            <div className={'w-3/4 border h-screen bg-gray-200'}>

            </div>

        </div>

    </>
  );
}

export default App;
