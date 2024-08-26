import { Avatar } from "./Avatar";

export function Profile({ image, isNew, name, job }) {
    return (
        <div className="profile">
            {image && <Avatar className='avatar' image={image} isNew={isNew} />
            }
            <h1 className='orange' >{name}</h1>
            <h2>{job}</h2>
        </div>
    )
}