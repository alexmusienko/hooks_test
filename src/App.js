import { createContext, useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const dataContext = createContext({
    mail: "111@example.com",
    text: 'text 111',
    forceChangeMail: () => {}
});

const { Provider } = dataContext;

const InputComponent = () => {

    const context = useContext(dataContext);

    return (
        <>
            <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
            <input
                value={context.mail}
                onFocus={context.forceChangeMail}
                type="email"
                className='form-control'
                id="exampleFormControlInput1"
                placeholder="name@example.com" />
        </>
    )
}


const Form = (props) => {

    console.log('render');

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <InputComponent />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
};

function App() {
    const [data, setData] = useState({
        mail: "222@example.com",
        text: 'text 222',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData(data => ({...data, mail: '555@example.com'}));
    }

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <button
                onClick={() => setData({
                    mail: "333@example.com",
                    text: 'text 333',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;