const dmmptabledb = (databasename, table) => {
    //create database

    const database = new Dexie(databasename)
    database.version(1).stores(table);
    database.open();

    return database;
}

//insert function
const bulkcreate = (dbtable, data) => {
    let flag = empty(data)
    if (flag) {
        dbtable.bulkAdd([data]);
        console.log("Data inserted successfully !!!")
    } else {
        console.log("Please insert Data ... !")
    }
    return flag;
}

//check textbox validation
const empty = object => {
    let flag = false;

    for (const value in object) {
        if (object[value] != "" && object.hasOwnProperty(value)) {
            flag = true;
        } else {
            flag = false;
        }
    }
    return flag;
}
//Get data from database
const getData = (dbtable, fn) => {
    let index = 0;
    let obj = {};

    dbtable.count((count) => {
        if (count) {
            dbtable.each(table => {

                obj = Sortobj(table);
                fn(obj, index++)
            })
        } else {
            fn(0)
        }
    })
}

//Sorting Object order
const Sortobj = sortobj => {
    let obj = {};
    obj = {
        ID: sortobj.ID,
        DMPP: sortobj.DMPP,
        DMP: sortobj.DMP,
        H3PO4: sortobj.H3PO4,
        COLOR: sortobj.COLOR,
        YELLOW: sortobj.YELLOW,
        BLUE: sortobj.BLUE,
        KILOSTONS: sortobj.KILOSTONS,
        LITRETONS: sortobj.LITRETONS
    }
    return obj

}

//create dynamic elements
const createElement = (tagname, appendTo, fn) => {
    const element = document.createElement(tagname);
    if (appendTo) appendTo.appendChild(element);
    if (fn) fn(element);
}

export default dmmptabledb;
export {
    bulkcreate,
    getData,
    createElement
}