import React, { useState } from 'react';

const Trash = () => {
    const [trash, setTrash] = useState([
        {id:1,name:"hamza"},
        {id:1,name:"hamza"},
]);
    const [deletedItems, setDeletedItems] = useState([]);

    const handleDelete = (item) => {
        // Add item to deletedItems state
        setDeletedItems([...deletedItems, item]);

        // Remove item from trash state
        setTrash(trash.filter(i => i !== item));
    }

    const handleRestore = (item) => {
        // Add item to trash state
        setTrash([...trash, item]);

        // Remove item from deletedItems state
        setDeletedItems(deletedItems.filter(i => i !== item));
    }

    return (
        <div>
            <h2>Trash</h2>
            <ul>
                {trash.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleDelete(item)}>Delete</button>
                    </li>
                ))}
            </ul>
            <h2>Deleted Items</h2>
            <ul>
                {deletedItems.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleRestore(item)}>Restore</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Trash;