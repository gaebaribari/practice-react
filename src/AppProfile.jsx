import { Profile } from "./Profile";

export function AppProfile() {
    const handleClick = (event) => {
        console.log(event);
    }

    return (
        <>
            <button onClick={handleClick}>버튼</button>
            <Profile image='' name='다라리' job='가수' />
            <Profile image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80' name='안나' job='교사' />
            <Profile image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' name='뱀뱀' job='MC' isNew={true} />
        </>
    )
}