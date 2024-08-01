import { useEffect, useState, useRef, useCallback } from "react";
import { DataContainer, DataRow, MainContainer, RowContent, RowValue, Loader } from "./employeeDetails.styles";

const EmployeeDetails = () => {
    const RowHeaderNames = ['Id', 'Name', 'Age', 'Gender', 'Country'];
    const [dummyData, setDummyData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    const fetchData = async (page) => {
        setLoading(true);
        const limit = 10;
        const skip = (page - 1) * limit;
        const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
        const data = await response.json();
        setDummyData(prevData => [...prevData, ...data.users]);
        setHasMore(data.users.length > 0);
        setLoading(false);
    };

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const lastElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    return (
        <MainContainer>
            <DataContainer>
                <DataRow header>
                    {RowHeaderNames.map((header, index) => (
                        <RowContent key={index}>
                            <RowValue>{header}</RowValue>
                        </RowContent>
                    ))}
                </DataRow>
                {dummyData.map((user, index) => {
                    if (index === dummyData.length - 1) {
                        return (
                            <DataRow key={index} ref={lastElementRef}>
                                <RowContent>
                                    <RowValue>{user.id}</RowValue>
                                </RowContent>
                                <RowContent>
                                    <RowValue>{user.firstName} {user.lastName}</RowValue>
                                </RowContent>
                                <RowContent>
                                    <RowValue>{user.age}</RowValue>
                                </RowContent>
                                <RowContent>
                                    <RowValue>{user.gender}</RowValue>
                                </RowContent>
                                <RowContent>
                                    <RowValue>{user.address?.city}, {user.address?.state}, {user.address?.country}</RowValue>
                                </RowContent>
                            </DataRow>
                        );
                    } else {
                        return (
                            <DataRow key={index}>
                                <RowContent>
                                    <RowValue>{user.id}</RowValue>
                                </RowContent>
                                <RowContent>
                                    <RowValue>{user.firstName} {user.lastName}</RowValue>
                                </RowContent>
                                <RowContent>
                                    <RowValue>{user.age}</RowValue>
                                </RowContent>
                                <RowContent>
                                    <RowValue>{user.gender}</RowValue>
                                </RowContent>
                                <RowContent>
                                    <RowValue>{user.address?.city}, {user.address?.state}, {user.address?.country}</RowValue>
                                </RowContent>
                            </DataRow>
                        );
                    }
                })}
                {loading && <Loader>Loading...</Loader>}
            </DataContainer>
        </MainContainer>
    );
};

export default EmployeeDetails;
