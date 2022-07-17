import React, { useEffect } from 'react';
import { useRouter } from "next/router"

function HomeRefirect() {
    const router = useRouter();
    useEffect(() => {
        router.push('/country');
    }, [])

    return (
        <></>
    )
}

export default HomeRefirect