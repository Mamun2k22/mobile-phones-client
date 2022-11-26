import { useEffect, useState } from "react"

const useSellar = email => {
    const [isSellar, setIsSellar] = useState(false);
    const [isloading, setisLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/sellar/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSellar(data.isSellar)
                    setisLoading(false)
                })
        }
    }, [email])
    return [isSellar, isloading]
}


export default useSellar;