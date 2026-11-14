

const catalog = [
    {
        "title":"Chocolatte",
        "category":"Candy",
        "price":"20",
        "image":"choco.png",
        "_id": "1" // This should be unique
    },
      {
        "title":"Hoodie",
        "category":"merch",
        "price":"500",
        "image":"hoodie.png",
        "_id": "2"
    },
      {
        "title":"Coffee",
        "category":"merch",
        "price":"20",
        "image":"coffe.png",
        "_id": "3"
    },
];

class DataService {
    getProducts(){
        return catalog;
    }
}

export default DataService;