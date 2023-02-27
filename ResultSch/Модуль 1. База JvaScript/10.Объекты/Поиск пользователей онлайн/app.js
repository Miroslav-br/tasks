const users = [
    {
    username: 'David',
    status: 'online',
    lastActivity: 10
    },
    {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    },        
]

const onlineUsers = []
users.forEach((value) => {
    if (value.status == 'online'){
        onlineUsers.push(value.username)
    }
})

 console.log()