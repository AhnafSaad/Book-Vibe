import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredDb } from "../../Utility/AddToDb";

const ReadList = () => {
    const data = useLoaderData();
    const [MyReadList, setMyReadList] = useState([]);

    useEffect(()=>{
    const StoredBookData = getStoredDb();
    const storedBooks = StoredBookData.map(id => parseInt(id));
    const MyReadList = data.filter(book => storedBooks.includes(book.bookId));
    setMyReadList(MyReadList);
    },[])
    return (
        <div>        
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="My Read List" />
  <div className="tab-content bg-base-100 border-base-300 p-6">My Read List</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlists" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Wishlists</div>

</div>
        </div>
    );
};

export default ReadList;