import { useRecoilState, useRecoilValueLoadable } from "recoil";
import InnerCard from "../components/InnerCard";
import SpotlightCard from "../components/MainCard";
import UploadCakeCard from "../components/UploadCakeCard";
import { cakeSelector, cakeState } from "../atoms/cakeAtoms";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Home() {

    const cakesSelector = useRecoilValueLoadable(cakeSelector)
    const [cakesAtom, setCakesAtom] = useRecoilState(cakeState)
    const [loader, setLoader] = useState(false)
    const navigator = useNavigate()

    useEffect(() => {
        setLoader(true)
        axios.get("https://priti-s-cake-5q8l.vercel.app/me", {
            headers:{
                Authorization: localStorage.getItem("authorization"),
            }
        }).then(response => {
            if(response.data.message !== "done")
                navigator("../")

        }).catch(() => {
            navigator("../")
        })
    },[])

    useEffect(() => {
        if (cakesSelector.state === "loading")
            setLoader(true)
        if (cakesSelector.state === "hasValue") {
            
            setLoader(false)
            setCakesAtom(cakesSelector.contents)
        }
    }, [cakesSelector, cakesAtom])

    return <>
        <Loader show={loader} />
        <div className="min-h-screen">
            <div className="flex justify-center">
                <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-12 w-full mx-5 md:mx-20 my-5">
                    <SpotlightCard>
                        <UploadCakeCard />
                    </SpotlightCard>
                    {cakesSelector.state === "hasValue" && cakesAtom.map((cake:any) =>
                        <SpotlightCard key={cake.id}>
                            <InnerCard data={cake}/>
                        </SpotlightCard>
                    )}
                </div>
            </div>
        </div>
    </>

}