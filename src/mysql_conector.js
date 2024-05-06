// import mysql
import mysql from "mysql";

let datos;

const conector = mysql.createConnection(
    {
        host: "localhost",
        user: "majobd",
        password: "majobd_123",
        database: "nodejs",
    }
)

const conectar = () => {
    conector.connect(err => {
        if (err) throw err;
        console.log('conectado!!!');
    })
}

const addContacto = (nombre, numero) => {
    const sql = `INSERT INTO agenda (agenda, numero) VALUES ("${nombre}", ${numero})`;

    conector.query(sql, (err, res, filed) => {
        if(err) throw err;
        console.log(res);
    })
}

const getContactos = () => {
    return new Promise((resolve, reject) => {
        conector.query('SELECT * FROM agenda', (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const deleteContacto = (id) => {
    return new Promise((resolve, reject) => {

        conector.query(`DELETE FROM agenda WHERE id =${id}`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

export { addContacto, getContactos, deleteContacto };