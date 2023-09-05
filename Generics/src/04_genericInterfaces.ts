// http://uvw.com/user
// http://uvw.com/products

interface Result <T> {
    data: T | null;
    error: string | null;
}

interface User {
    name: string;
}

interface Profile {
    title: string;
}

function fetch <T> (): Result<T>{
    return {data: null, error: null};
}

const fetch1 = fetch<User>()
fetch1.data?.name;

const fetch2 = fetch<Profile>()
fetch2.data?.title;

// for the interfaces we need to explicitly specify the generic interface type