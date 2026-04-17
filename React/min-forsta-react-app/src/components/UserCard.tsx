type UserCardProps = {
    name: string;
    age: number;
    email: string;
};

function UserCard({ name, age, email}: UserCardProps) {
    return (
        <div>
            <h2>Användarkort</h2>
            <p>Namn: {name}</p>
            <p>Ålder: {age}</p>
            <p>E-post: {email}</p>
        </div>
    );
}

export default UserCard;