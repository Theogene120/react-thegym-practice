

import React from "react"
import avatar from '../public/user.png'
import starEmpty from '../public/star-empty.png'
import starFilled from '../public/star-filled.png'


export default function Profile() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true 
    })
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prev => {
            return {...prev, isFavorite: !prev.isFavorite}
        })
    }

    return (
        <main className="py-10 flex flex-col justify-center items-center ">
            <article className="flex flex-col gap-6">
                <img
                    src={avatar}
                    className="h-80"
                    alt="User profile picture of John Doe"
                />
                <div className="info border">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="w-10"
                    >
                        <img
                            src={starIcon}
                            alt="empty star icon"
                            className="favorite"
                        />
                    </button>
                    <h2 className="text-2xl font-bold mt-4 pb-2">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="font-semibold opacity-80">{contact.phone}</p>
                    <p className="font-semibold opacity-80">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
