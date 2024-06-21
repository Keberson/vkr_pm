import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useGetActivitiesQuery} from "../../services/APIService";

import {setLoader} from "../../store/slices/LoaderSlice";

import {Header} from "../../components/Header/Header";
import {Activities} from "../../components/Worker/Activities/Activities";
export const Worker = () => {
    const params = useParams();
    const projectID: number = Number(params.id);
    const dispatch = useAppDispatch();
    const {isLoading} = useGetActivitiesQuery(projectID);

    useEffect(() => {
        dispatch(setLoader({show: isLoading, from: "Worker"}));
    }, [dispatch, isLoading]);

    return (
        <>
            <Header>
                <h2 className="text-text text-xl comfortaa-700">Список работ</h2>
            </Header>
            <div className="h-full w-full grid grid-cols-3 ps-10 pe-10 pt-5 pb-5 overflow-hidden">
                <Activities />
            </div>
        </>
    );
};
