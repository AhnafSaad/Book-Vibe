const getStoredDb = () =>{
   const StoredBookStr = localStorage.getItem('readList');
   if(StoredBookStr){
    const StoredBook = JSON.parse(StoredBookStr);
    return StoredBook;
   } 
  else{
    return [];
  }
}

const addToDb = (id) =>{
    const StoredBookDb = getStoredDb();
    if(StoredBookDb.includes(id)){
        alert('Already added to the list');
    }
    else{
        StoredBookDb.push(id);
        const data = JSON.stringify(StoredBookDb);
        localStorage.setItem('readList', data);
    }
}
export { addToDb }