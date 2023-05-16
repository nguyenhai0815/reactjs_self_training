import { v4 as uuidv4 } from 'uuid';
// import { AppContext } from '../components/ListContext';

const Items = [
    {
        id: uuidv4(),
        name: "Item1",
        thumb: "images/avatar1.png",
        level: 2 // high
    },
    {
        id: uuidv4(),
        name: "Item2",
        thumb: "images/avatar2.jpg",
        level: 0 // low
    },
    {
        id: uuidv4(),
        name: "Item3",
        thumb: "images/avatar3.png",
        level: 1 // medium
    },
    {
        id: uuidv4(),
        name: "Item4",
        thumb: "images/avatar1.png",
        level: 0 // low
    },
    {
        id: uuidv4(),
        name: "Item5",
        thumb: "images/avatar2.jpg",
        level: 2 // high
    },
    {
        id: uuidv4(),
        name: "Item6",
        thumb: "images/avatar3.png",
        level: 1 // medium
    }
];

export default Items;