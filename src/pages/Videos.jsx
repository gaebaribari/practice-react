import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Videos() {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setText('');
        navigate(`/videos/${text}`);
    }

    return (
        <p>Videos
            <form>
                <input type="text" value={text} onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>제출</button>
            </form>
        </p>
    )
}