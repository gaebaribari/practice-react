import { useContext, useState } from "react"
import { DarkModeProvider, DarkModeContext } from "./context/DarkModeContext";


export function AppForm() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    return (
        <DarkModeProvider>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>이름:</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={userInfo.name}
                    onChange={handleChange}
                />
                <label htmlFor='email'>이메일:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={userInfo.email}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <Footer />
        </DarkModeProvider>
    )
}

function Footer() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <>
            <span>{darkMode ? ('다크모드 O') : ('다크모드 X')}</span>
            <button onClick={toggleDarkMode}>다크모드 토글버튼</button>
        </>

    )
}