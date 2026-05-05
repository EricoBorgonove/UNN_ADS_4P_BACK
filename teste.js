import bcrypt from 'bcrypt';
const senha = '123456';
const senhaE = '123457';
const salt = await bcrypt.genSalt(50);
const senhaHash = await bcrypt.hash(senha, salt);
const comparacao = await bcrypt.compare(senha, senhaHash)

console.log ('senha criptografada', senhaHash)
console.log ('sal', salt)
console.log ('comparacao', comparacao)
