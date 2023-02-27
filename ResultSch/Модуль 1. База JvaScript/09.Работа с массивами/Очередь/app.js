const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария',
'Светлана', 'Артем', 'Глеб']

const giveParcel = peopleWaiting
    .splice(0,2)
    .forEach((man) => console.log(`${man} забрал(а) свою посылку`))

const leaveQueueWithoutParcel = peopleWaiting
    .splice(1,peopleWaiting.length)
    .forEach((man) => console.log(`${man} решил(а) не ждать посылку`))

console.log(`${peopleWaiting} последний(яя) кто успеет забрать посылку до обеда`)

let a =[1,2,3,4,5]

const result = a[0]+a[a.length-1]
console.log('result= ',result)