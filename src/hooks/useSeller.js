import { useEffect, useState } from "react"

const useSellar = email => {
    const [isSellar, setIsSellar] = useState(false);
    const [isloading, setisLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://mobile-phones-server.vercel.app/user/sellar/${email}`)
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