export default function personReducer(person, action) {
    switch (action.type) {
        case 'edit':
            {
                const { prev, current } = action;
                return { ...person, mentors: person.mentors.map((m) => m.name == prev ? { ...m, name: current } : m) };
            }
        case 'add':
            {
                const { name, title } = action;
                return {
                    ...person,
                    mentors: [...person.mentors, { name, title }]
                };
            }
        case 'delete':
            {
                const { name } = action;
                return {
                    ...person,
                    mentors: person.mentors.filter((mentor) => mentor.name !== name),
                };
            }
        default:
            throw new Error(Error);
            ;
    }

}