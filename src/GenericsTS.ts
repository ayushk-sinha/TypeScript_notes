function warapArray<T>(item: T): T[]{
    return [item]
}
warapArray("string value")
warapArray(10)
warapArray({base: "ginger"})

function pair<A,B>(a:A,b:B): [A,B]{
    return [a,b]
}

pair("masala",20)
pair("array",{base:"ginger", Amount: 2, ingridients : ["tealeaves","sugar","milk",10,20]})


interface Box<T>{
    content: T
}
const classBox:Box<number>={
    content : 10
}
const classBox2:Box<string>={
    content : "faaaa"
}

interface ApiPromise<T>{
    status: number,
    data: T
}

const res : ApiPromise<{response: string}>={
    status :200,
    data: {response : "true"}
}