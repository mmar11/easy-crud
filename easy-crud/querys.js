let valinsert = () => {
    let val = "? "
    for (let i = 0; i < (param.length - 1); i++) {
        val += ", ? "
    }
    return val
}


let query = {
    selectall: `SELECT * FROM ${table}`,
    selectcol: `SELECT * FROM ${table} WHERE ${column} = ? `,
    insert: `INSERT INTO ${table} (${colinsert}) VALUES(${valinsert()})`
}
export default query 