class Stack {
    constructor() {
        this.list = []
    }

    push (data) {
        this.list.push(data)
    }

    pop() {
        return this.list.pop()
    }

    get size() {
        return this.list.length
    }

}

const forward = new Stack()
const backward = new Stack()

for (let index = 0; index < 10; index++) {
    backward.push(index)
}

function go() {
    if (!forward.size) {
        console.log('没有前路了')
        return        
    }
    backward.push(forward.pop())
}

function back() {
    if (!backward.size) {
        console.log('没有退路了')
        return
    }
    forward.push(backward.pop())
}

back()
go()
back()
go()
back()
go()
back()
go()
back()
go()
back()
back()
back()

console.log(backward, forward)
