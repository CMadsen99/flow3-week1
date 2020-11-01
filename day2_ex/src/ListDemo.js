function MemberTable({ members }) {
    return (
        <table>
            <thead>
                <tr><th>Name</th><th>Age</th></tr>
            </thead>
            <tbody>
                {members.map(m => <tr key={m.name}><td>{m.name}</td><td>{m.age}</td></tr>)}
            </tbody>
        </table>
    );
}

function MemberDemo(props) {
    return (
        <div>
            <h4>All Members</h4>
            <MemberTable members={props.members} />
        </div>
    );
}

export default function List() {
    const initialMembers = [{ name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 }];

    return (
        <MemberDemo members={initialMembers} />
    );
}
