

const catalog = [
    {
        "title":"Chocolatte",
        "category":"Candy",
        "price":"20",
        "image":"placeholder",
        "_id": "1" // This should be unique
    },
      {
        "title":"Chocolatte",
        "category":"Candy",
        "price":"20",
        "image":"placeholder",
        "_id": "2"
    },
];

class DataService {
    getProducts(){
        return catalog;
    }
}

export default DataService;