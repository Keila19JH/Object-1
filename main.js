const usuario = {
    nombre: 'Jesus', 
    correo: 'jsus@gmail.com',
    telefono: 551212121221233123,
    direccion: {
        calle: 'Calle 123',
        numero: '1234',
        colonia: 'ixtapaluca'
    },
    pasatiempos: ['video juegos', 'lectura', 'deportes']
    
}



console.log (usuario.nombre.toUpperCase());
console.log (usuario.telefonotoString().length);

let filtrarNAN = usuario.pasatiempos.filter( (pasatiempo) => pasatiempo!=='deportes');
console.log(filtrarNAN);
// extraer el ssd y grafica
const pcComponentes = {
    procesador: 'RYZEN 5',
    capacidadRAM: '16GB',
    ssd: '240gb',
    grafica: 'rtx 3060'
}
const {ssd,grafica} = pcComponentes;
console.log (ssd,grafica); 