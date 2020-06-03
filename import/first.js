let tables = {}

tables.records = [
    {
        name:'Student',
        colume:[{'name':'Ammy',age:10}],
        data:50
    },
    {
        name:'Emp',
        colume:['EmpId','name','age'],
        data:100
    }
]

tables.insert = (table,obj) => {
    return `Insert into ${table} name , age VALUES (${obj.name}, ${obj.age})`
}

tables.find = (table)=>{
    return `Select * from ${table}`
}

//module.exports = tables
export default tables;
