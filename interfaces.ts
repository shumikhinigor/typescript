// interface
interface Rect {
    // only for reading
    readonly id: number
    // optional parameter
    color?: string
    size: {
        width: number
        height: number
    }
}
const rectWhite: Rect = {
    id: 1,
    color: 'white',
    size: {
        width: 10,
        height: 10
    }
}
const rectBlack: Rect = {
    id: 2,
    color: 'black',
    size: {
        width: 10,
        height: 10
    }
}
const rectYellow = {} as Rect
const rectRed = <Rect>{}

interface RectWithArea extends Rect {
    getArea: () => number
}
const rectBlue: RectWithArea = {
    id: 3,
    color: 'blue',
    size: {
        width: 30,
        height: 30
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

interface IClock {
    time: Date
    setTime(date: Date): void
}
class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles {
    [key: string]: string
}
const css: Styles = {
    border: '1px solid black',
    marginTop: '10px',
    borderRadius: '5px'
}