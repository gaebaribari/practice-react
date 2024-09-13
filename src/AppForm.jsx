import { useState } from "react"

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
    )
}