import { useParams } from "react-router";
import { useEffect, useState } from "react";
import PeopleTable from "./Table";
import * as courseClient from "../client";

export default function PeoplePage() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        if (!cid) return;
        console.log('Fetching users for course:', cid);
        courseClient.fetchCourseUsers(cid)
            .then((data) => {
                console.log('Received data:', data);
                setUsers(Array.isArray(data) ? data.map((d: any) => d?.user ?? d) : []);
            })
            .catch(err => console.error('Error fetching users:', err));
    }, [cid]);

    return <PeopleTable users={users} />;
}