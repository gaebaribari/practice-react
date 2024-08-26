export function Avatar({ image, isNew }) {
    return (
        <>
            <img className="photo" src={image} alt="" />
            {isNew &&
                <h3 className="new">
                    new
                </h3>
            }
        </>
    )
}