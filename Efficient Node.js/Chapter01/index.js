setTimeout(async () => {
    const { server } = await import('./server.js');

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running...');
});
}, 5000);
