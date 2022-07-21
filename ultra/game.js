class Board {
    constructor(x, y, size, layer, parent, pos) {
        this.x = x
        this.y = y
        this.size = size
        this.layer = layer
        this.parent = parent
        this.pos = pos

        this._restrict = -1
        this.t = new Array(9)
        for(let i = 0; i < 9; i++)
            this.t[i] = new Void()

        if(layer + 1 <= maxlayer) {
            this.createInnerBoards()
        }
    }

    static create() {
        return new Board(0,0 , 600, 0, undefined, undefined)
    }

    get type() {
        return 'B'
    }

    drawRectriction() {
        strokeWeight(0)
        fill(255,255,255,100)

        let w = this.size/60
        let margin = 2*w
        let d = (this.size-2*margin)/3
        let br = 2.5*w

        let pos
        for(let x = 0; x < 3; x++)
        for(let y = 0; y < 3; y++) {
            pos = 3*y+x
            if(this.restrict != -1 && this.restrict != pos) continue // dont draw restricted cell
            if(this.t[pos].type != 'V') {
                if(this.t[pos].type == 'B')
                    this.t[pos].drawRectriction()
                continue
            }

            let cellX = this.x+margin + d*x
            let cellY = this.y+margin + d*y
            
            if(pos == 0)
                rect(cellX, cellY, d, d, br,0,0,0)
            else if(pos == 2)
                rect(cellX, cellY, d, d, 0,br,0,0)
            else if(pos == 6)
                rect(cellX, cellY, d, d, 0,0,0,br)
            else if(pos == 8)
                rect(cellX, cellY, d, d, 0,0,br,0)
            else
                rect(cellX, cellY, d, d)
        }
    }

    draw() {
        stroke(255)
        let w = this.size/60
        strokeWeight(w)

        let margin = 2*w
        for(let i = 1; i < 3; i++) {
            let d = margin + (i/3) * (this.size - 2*margin)
            line(this.x+d       , this.y+margin, this.x+d               , this.y+this.size-margin)
            line(this.x  +margin, this.y+d     , this.x+this.size-margin, this.y+d               )
        }

        for(let x = 0; x < 3; x++)
        for(let y = 0; y < 3; y++) {
            if(this.t[3*y+x].type != 'V')
                this.t[3*y+x].draw()
        }

        
    }

    createInnerBoards() {
        let w = this.size/60
        let margin = 2*w
        let innerSize = (this.size-2*margin-2*w)/3

        for(let x = 0; x < 3; x++)
        for(let y = 0; y < 3; y++) {
            let bX = this.x+margin + (innerSize+w)*x 
            let bY = this.y+margin + (innerSize+w)*y

            this.t[3*y+x] = new Board(bX, bY, innerSize, this.layer+1, this, 3*y+x)
        }
    }

    checkPiece(p) {
        let pos
        for(let x = 0; x < 3; x++)
        for(let y = 0; y < 3; y++) { // checkVertical
            pos = 3*y+x
            if(this.t[pos].type != p)
                break
            if(y == 2)
                return true
        }

        for(let y = 0; y < 3; y++)
        for(let x = 0; x < 3; x++) { // checkHorizontal
            pos = 3*y+x
            if(this.t[pos].type != p)
                break
            if(x == 2)
                return true
        }

        // checkDiagonals
        if(this.t[4].type == p) {// center
            if(this.t[0].type == p && this.t[8].type == p) return true
            if(this.t[2].type == p && this.t[6].type == p) return true
        }

        return false
    }

    check() {
        if(this.checkPiece('X'))
            return 'X'
        if(this.checkPiece('O'))
            return 'O'
        return -1
    }

    addPiece(type, x, y) {
        let w = this.size/60
        let margin = 2*w
        let innerSize = (this.size-2*margin-2*w)/3

        let pX = this.x+margin + (innerSize+w)*x
        let pY = this.y+margin + (innerSize+w)*y

        let p
        if (type == 'X')
            p = new X_Piece(pX, pY, innerSize)
        else if (type == 'O')
            p = new O_Piece(pX, pY, innerSize)
        
        this.t[3*y+x] = p

        let c = this.check()
        if(c != -1) { // board is completed
            if(this.layer == 0) // case main board is completed, game over
                console.log("game over, winner:" + c)
            else
                this.parent.addPiece(c, this.pos%3, Math.floor(this.pos/3))
        }
        if( (c == -1 && this.layer != 0) || (c != -1 && this.layer == 1) ) {
            this.parent.restrict = 3*y+x
            if(this.parent.t[3*y+x] != undefined && this.parent.t[3*y+x].type == 'B')
                this.parent.t[3*y+x].removeRestrict()
        }
    }

    get restrict() {
        return this._restrict
    }

    set restrict(r) {
        if(this.t[r].type != 'B' || !this.t[r].hasPlay()) this.removeRestrict()
        else this._restrict = r
        if(this.parent != undefined)
            this.parent.restrict = this.pos
    }

    removeRestrict() {
        this._restrict = -1
        for(let i = 0; i < 9; i++)
            if(this.t[i] != undefined && this.t[i].type == 'B')
                this.t[i].removeRestrict()
    }

    processMousePress(mX, mY) {
        let pos = -1
        let x, y

        let w = this.size/60
        let margin = 2*w
        let innerSize = (this.size-2*margin-2*w)/3

        for(x = 0; x < 3 && pos == -1; x++)
        for(y = 0; y < 3 && pos == -1; y++) {
            let cellX = this.x+margin + (innerSize+w)*x
            let cellY = this.y+margin + (innerSize+w)*y
            
            if(mX >= cellX && mX <= cellX+innerSize && mY >= cellY && mY <= cellY+innerSize)
                pos = 3*y+x
        }
        x -= 1
        y -= 1 // adjust x and y, for still increments when its over

        if(pos == -1) return // not inside a cell
        if(this.restrict != -1 && this.restrict != pos) return // invalid position to play

        if(this.t[pos].type == 'V') {
            this.addPiece(turn, x, y)
            passTurn()
            return
        }

        if(this.t[pos].type == 'B')
            this.t[pos].processMousePress(mX, mY)
    }

    hasPlay() {
        for(let i = 0; i < 9; i++) {
            if(this.t[i].type == 'V') return true
            if(this.t[i].type == 'B' && this.t[i].hasPlay()) return true
        }
        return false
    }
}

class Piece {
    constructor(x,y, size) {
        this.x = x
        this.y = y
        this.size = size
    }
}

class X_Piece extends Piece {
    draw() {
        stroke(255,0,0)
        strokeWeight(1)
        fill(255,0,0)
        rect(this.x, this.y, this.size)
    }

    get type() {
        return 'X'
    }
}

class O_Piece extends Piece {
    draw() {
        stroke(0,0,255)
        strokeWeight(1)
        fill(0,0,255)
        rect(this.x, this.y, this.size)
    }

    get type() {
        return 'O'
    }
}

class Void {
    get type() {
        return 'V'
    }
}

var tab
var maxlayer
var turn

function setup() {
    createCanvas(650, 600)

    maxlayer = 0
    tab = Board.create()

    turn = 'X'
}

function draw() {
    background(0)
    
    stroke(255)
    strokeWeight(1)
    noFill()
    rect(0, 0, 600, 600)
    tab.drawRectriction()
    tab.draw()
}

function updateBoardSize(increment) {
    maxlayer += increment
    if (maxlayer < 0) maxlayer = 0

    tab = Board.create()
}

function mousePressed() {
    if(mouseX > 600) {
        if(mouseButton == LEFT)
            updateBoardSize(1)
        else
            updateBoardSize(-1)
    }
    else {
        tab.processMousePress(mouseX, mouseY)
    }

    return false
}

function passTurn() {
    if(turn == 'X')
        turn = 'O'
    else
        turn = 'X'
}