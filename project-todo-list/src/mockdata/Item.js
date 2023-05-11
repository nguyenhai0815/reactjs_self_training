import { v4 as uuidv4 } from 'uuid';
// import { AppContext } from '../components/ListContext';

const Items = [
    {
        id: uuidv4(),
        name: "Item1",
        level: 2 // high
    },
    {
        id: uuidv4(),
        name: "Item2",
        level: 0 // low
    },
    {
        id: uuidv4(),
        name: "Item3",
        level: 1 // medium
    },
    {
        id: uuidv4(),
        name: "Item4",
        level: 0 // low
    },
    {
        id: uuidv4(),
        name: "Item5",
        level: 2 // high
    },
    {
        id: uuidv4(),
        name: "Item6",
        level: 1 // medium
    }
];

export default Items;