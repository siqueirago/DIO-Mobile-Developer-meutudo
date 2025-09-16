



async function connectToDatabase(user, password) {

    
    if (user === 'admin' && password === 'admin') {
        console.log('Conectado ao banco de dados!');
    } else {
        throw new Error('Usuário ou senha inválidos');
    }

    
}


export default connectToDatabase;