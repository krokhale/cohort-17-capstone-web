import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';

function App() {

    // const [categories, setCategory] = useState(['Category 1', 'Category 2']);

    const [selectedCategory, setSelectedCategory] = useState('categoryOne')
    const [questionText, setQuestionText] = useState('')
    const [questions, setQuestions] = useState([])

    const fetchQuestions = async () => {
        let res = await fetch(`http://localhost:3000/api/questions?category=${selectedCategory}`)
        let data = await res.json()
        console.log(data)
        setQuestions(data)
    };

    useEffect(() => {
        fetchQuestions()
    }, [])

    useEffect(() => {
        fetchQuestions()
    }, [selectedCategory])

    const updateQuestionText = async (event) => {
        setQuestionText(event.currentTarget.value)
    };

    const createQuestion = async () => {
        let res = await fetch(`http://localhost:3000/api/questions?category=${selectedCategory}`, {
            method: 'POST',
            body: JSON.stringify({questionText: questionText}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        let data = await res.json()
        console.log(data)
        setQuestionText('')
        fetchQuestions()
    };


  return (
    <>

        <div className={'border p-4 bg-gray-100'}>
            <h1 className={'text-center text-xl uppercase tracking-wide'}>Question App</h1>
        </div>

        <div className={'w-full flex'}>

            <div className={'w-1/4 h-screen bg-gray-100'}>
                <ul>
                    <li className={selectedCategory == 'categoryOne' ? 'p-8 bg-gray-300' : 'p-8'} onClick={() => setSelectedCategory('categoryOne')}>
                        <button className={'text-2xl uppercase tracking-widest'}>Category 1</button>
                    </li>
                    <li className={selectedCategory == 'categoryTwo' ? 'p-8 border bg-gray-300' : 'p-8 border'} onClick={() => setSelectedCategory('categoryTwo')}>
                        <button className={'text-2xl uppercase tracking-widest'}>Category 2</button>
                    </li>
                    <li className={selectedCategory == 'categoryThree' ? 'p-8 bg-gray-300' : 'p-8'} onClick={() => setSelectedCategory('categoryThree')}>
                        <button className={'text-2xl uppercase tracking-widest'}>Category 3</button>
                    </li>
                    <li className={selectedCategory == 'categoryFour' ? 'p-8 border bg-gray-300' : 'p-8 border'} onClick={() => setSelectedCategory('categoryFour')}>
                        <button className={'text-2xl uppercase tracking-widest'}>Category 4</button>
                    </li>
                    <li className={selectedCategory == 'categoryFive' ? 'p-8 border bg-gray-300' : 'p-8 border'} onClick={() => setSelectedCategory('categoryFive')}>
                        <button className={'text-2xl uppercase tracking-widest'}>Category 5</button>
                    </li>
                </ul>

            </div>

            <div className={'w-3/4 border h-screen bg-gray-200'}>

                <div className={'flex justify-center p-12 gap-12'}>

                    <textarea value={questionText} onChange={updateQuestionText}  id="" cols="30" rows="5"></textarea>
                    <button onClick={createQuestion} className={'px-2 py-1 text-white rounded h-8 bg-blue-500'}>Create Question</button>

                </div>


                <h1 className={'text-xl text-center'}>Questions list for {selectedCategory}</h1>
                <br/>
                <div className={'flex justify-center'}>

                    <ul>
                        {questions.map((question) => {
                            return <li key={question.id}>{question.questionText}</li>
                        })}
                    </ul>
                </div>


            </div>

        </div>

    </>
  );
}

export default App;
