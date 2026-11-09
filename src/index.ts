import server from './server';
const Port=process.env.PORT || 4000;
server.listen(Port,() => {
    console.log('Server is running on port 4000');
})