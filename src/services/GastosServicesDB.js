import Database from './DbServices'

const DB_EXEC = Database.getConnection();

export const getGastos = async () => {
    let results = await DB_EXEC(`select * from gastos`)
    return results.rows._array;
}

export const insertGastos = async (param) => {
    let results = await DB_EXEC(`insert into gastos(tipo, data, preco, valor, odometro) values(?,?,?,?,?)`, [param.tipo, param.data, param.preco, param.valor, param.odometro])
    return results.rowsAffcted;
}
