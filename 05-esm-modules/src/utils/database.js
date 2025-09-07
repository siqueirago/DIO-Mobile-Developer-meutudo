
const databaseType = {
    userType: 'admin',
    password: 'root',
    host: 'localhost',
    port: 3306,
    database: 'meuBancoDeDados'
}


async function conectToDatabase(dataName) {
    //logica de conexão com o banco de dados
    console.log(`Conectado ao banco de dados: ${dataName}`);
    
}

async function disconnectDatabase() {
    //logica de desconexão com o banco de dados
    console.log('Desconectado do banco de dados');
    
}


export {
    conectToDatabase,
    disconnectDatabase,
    databaseType
    
};

