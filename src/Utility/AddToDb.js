import toast from 'react-hot-toast';

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
        toast.error('Already added to the read list!', {
            duration: 3000,
            position: 'top-center',
        });
        return false;
    }
    else{
        StoredBookDb.push(id);
        const data = JSON.stringify(StoredBookDb);
        localStorage.setItem('readList', data);
        toast.success('Book added to read list successfully!', {
            duration: 3000,
            position: 'top-center',
        });
        return true;
    }
}

const getStoredWishlist = () =>{
   const StoredWishlistStr = localStorage.getItem('wishlist');
   if(StoredWishlistStr){
    const StoredWishlist = JSON.parse(StoredWishlistStr);
    return StoredWishlist;
   }
  else{
    return [];
  }
}

const addToWishlistDb = (id) =>{
    const readList = getStoredDb();
    if(readList.includes(id)){
        toast.error('This book is already in your read list!', {
            duration: 3000,
            position: 'top-center',
        });
        return false;
    }

    const StoredWishlistDb = getStoredWishlist();
    if(StoredWishlistDb.includes(id)){
        toast.error('Already added to the wishlist!', {
            duration: 3000,
            position: 'top-center',
        });
        return false;
    }
    else{
        StoredWishlistDb.push(id);
        const data = JSON.stringify(StoredWishlistDb);
        localStorage.setItem('wishlist', data);
        toast.success('Book added to wishlist successfully!', {
            duration: 3000,
            position: 'top-center',
        });
        return true;
    }
}

export { addToDb, getStoredDb, addToWishlistDb, getStoredWishlist } 