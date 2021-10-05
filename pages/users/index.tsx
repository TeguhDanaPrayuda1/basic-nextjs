import Header from '@components/header/Header';
import Layout from '@components/layout';
import { useRouter } from 'next/router';
import styles from '../../styles/Users.module.css';

interface UsersProps {
    dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
    const { dataUsers } = props;
    const router = useRouter();

    return (
        <Layout pageTitle="Users Page">
            {dataUsers.map((user) => (
                <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
                    <p>Nama  : {user.name}</p>
                    <p>Email : {user.email}</p>
                    <hr />
                </div>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,
        },
    };
}
