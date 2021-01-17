//regular function - sync execution
function print(statement) {
    console.log(statement)
}

print('first')
print('second')
print('third')

//async execution
function asyncPrint (statement) {
    setTimeout( () => {
        console.log(statement)
    }, Math.floor(Math.random() * 100))
}

asyncPrint('asyncfirst')
asyncPrint('asyncsecond')
asyncPrint('asyncthird')

//async execution Callbacks to make it sync
function asyncPrintCallback (statement, callback) {
    setTimeout( () => {
        console.log(statement)
        callback()
        }, Math.floor(Math.random() * 1000))
}

asyncPrintCallback('firstcallback', () => {
    asyncPrintCallback('secondcallback', () => {
        asyncPrintCallback ('thirdcallback', () => {}
        )
    })
})

//async exection promises to make it sync
function asyncPrintWithPromise(statement){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(statement)
            resolve()
        }, Math.floor(Math.random() * 100))
    })
}

asyncPrintWithPromise('firstAsyncPromise')
.then(() => asyncPrintWithPromise('secondAsyncPromise'))
.then(() => asyncPrintWithPromise('thirdAsyncPromise'))

//async exection with async-await to make it sync
function asyncPrintWithAsyncAwait (statement){
    setTimeout(() => {
        console.log(statement)
    }, Math.floor(Math.random * 100))
}

async function printAll() {
    await asyncPrintWithAsyncAwait('firstasyncawait')
    await asyncPrintWithAsyncAwait('secondasyncawait')
    await asyncPrintWithAsyncAwait('thirdasyncawait')
}

printAll()