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
        let b = new Board(0,0 , height, 0, undefined, undefined)
        b.draw()
        return  b
    }

    get type() {
        return 'B'
    }

    drawHover() {
        let hoverPos = this.positionDiscover(mouseX, mouseY)
        if(hoverPos == -1 || (this.restrict != -1 && hoverPos != this.restrict)) return
        if(this.t[hoverPos].type == 'B') {
            this.t[hoverPos].drawHover(mouseX, mouseY)
            return
        }
        if(this.t[hoverPos].type != 'V') return

        let w = this.size/60
        let margin = 2*w
        let d = (this.size-2*margin)/3
        let br = 2.5*w

        let hX = hoverPos%3
        let hY = Math.floor(hoverPos/3)
        
        let cellX = this.x+margin + d*hX
        let cellY = this.y+margin + d*hY

        let innerSize = (this.size-2*margin-2*w)/3

        let pX = this.x+margin + (innerSize+w)*hX
        let pY = this.y+margin + (innerSize+w)*hY

        let p
        if (turn == 'X')
            p = new X_Piece(pX, pY, innerSize)
        else if (turn == 'O')
            p = new O_Piece(pX, pY, innerSize)
        
        p.draw()
        
        strokeWeight(0)
        fill(255,255,255,75)
        
        if(hoverPos == 0)
            rect(cellX, cellY, d, d, br,0,0,0)
        else if(hoverPos == 2)
            rect(cellX, cellY, d, d, 0,br,0,0)
        else if(hoverPos == 6)
            rect(cellX, cellY, d, d, 0,0,0,br)
        else if(hoverPos == 8)
            rect(cellX, cellY, d, d, 0,0,br,0)
        else
            rect(cellX, cellY, d, d)
    }

    draw(restrictOverride) {
        if(this.layer == 0) {
            gsb.clear()
            gsb.stroke(212,175,55)
        }
        else if(restrictOverride || !this.hasPlay())
            gsb.stroke(100)
        else
            gsb.stroke(255)
        let w = this.size/60
        gsb.strokeWeight(w)

        let margin = 2*w
        for(let i = 1; i < 3; i++) {
            let d = margin + (i/3) * (this.size - 2*margin)
            gsb.line(this.x+d       , this.y+margin, this.x+d               , this.y+this.size-margin)
            gsb.line(this.x  +margin, this.y+d     , this.x+this.size-margin, this.y+d               )
        }

        for(let x = 0; x < 3; x++)
        for(let y = 0; y < 3; y++) {
            let type = this.t[3*y+x].type

            let restrictOverrideChild = false
            if(restrictOverride || (this.restrict != -1 && this.restrict != 3*y+x))
                restrictOverrideChild=true

            if(type != 'V')
                this.t[3*y+x].draw(restrictOverrideChild)
        }
    }

    drawWinPieces() {
        for(let i = 0; i < 9; i++) 
            if((this.t[i].type == 'X' || this.t[i].type == 'O') && this.t[i].winPiece) 
                this.t[i].draw()
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
            p = new X_Piece(pX, pY, innerSize, true)
        else if (type == 'O')
            p = new O_Piece(pX, pY, innerSize, true)
        
        this.t[3*y+x] = p

        let c = this.check()
        if(c != -1) { // board is completed
            if(this.layer == 0) { // case main board is completed, game over
                this.setWinPieces(c)
                gameOver(c)
            }
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

    positionDiscover(mX, mY) {
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
        
        return pos
    }

    processMousePress(mX, mY) {
        let pos = this.positionDiscover(mX, mY)
        if(pos == -1) return // not inside a cell

        let x = pos%3
        let y = Math.floor(pos/3)

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

    setWinPieces(p) {
        let pos
        for(let x = 0; x < 3; x++)
        for(let y = 0; y < 3; y++) { // checkVertical
            pos = 3*y+x
            if(this.t[pos].type != p)
                break
            if(y == 2) {
                for(let y2 = 0; y2 < 3; y2++)
                    this.t[3*y2+x].winPiece = true
            }
        }

        for(let y = 0; y < 3; y++)
        for(let x = 0; x < 3; x++) { // checkHorizontal
            pos = 3*y+x
            if(this.t[pos].type != p)
                break
            if(x == 2) {
                for(let x2 = 0; x2 < 3; x2++)
                    this.t[3*y+x2].winPiece = true
            }
        }

        // checkDiagonals
        if(this.t[4].type == p) {// center
            if(this.t[0].type == p && this.t[8].type == p) {
                this.t[0].winPiece = true
                this.t[4].winPiece = true
                this.t[8].winPiece = true
            }
            if(this.t[2].type == p && this.t[6].type == p) {
                this.t[2].winPiece = true
                this.t[4].winPiece = true
                this.t[6].winPiece = true
            }
        }

        return false
    }
}

class Piece {
    constructor(x,y, size, inBoard) {
        this.x = x
        this.y = y
        this.size = size
        this.winPiece = false
        this.inBoard = inBoard
    }
}

class X_Piece extends Piece {
    constructor(x,y, size, inBoard) {
        super(x,y, size, inBoard)
        this.w = this.size/10
        let margin = 2*this.w
        this.x1 = this.x + margin
        this.y1 = this.y + margin
        this.x2 = this.x + this.size - margin
        this.y2 = this.y + this.size - margin
    }

    draw() {
        if(this.inBoard) {
            let c = color(255,0,0)
            gsb.stroke(c)
            gsb.fill(c)
            gsb.strokeWeight(this.w)
            if(this.winPiece) {
                drawingContext.shadowBlur = 70;
                drawingContext.shadowColor = color(255,0,0);
                stroke(c)
                fill(c)
                strokeWeight(this.w)
                line(this.x1,this.y1, this.x2,this.y2)
                line(this.x1,this.y2, this.x2,this.y1)
                line(this.x1,this.y1, this.x2,this.y2)
                line(this.x1,this.y2, this.x2,this.y1)
            }
    
            gsb.line(this.x1,this.y1, this.x2,this.y2)
            gsb.line(this.x1,this.y2, this.x2,this.y1)
            if(this.size < 7)
                gsb.rect(this.x+this.w, this.y+this.w, this.size-2*this.w)
    
            drawingContext.shadowBlur = 0;

        }
        else {
            let c = color(255,0,0)
            stroke(c)
            fill(c)
            strokeWeight(this.w)
    
            line(this.x1,this.y1, this.x2,this.y2)
            line(this.x1,this.y2, this.x2,this.y1)
            if(this.size < 7)
                rect(this.x+this.w, this.y+this.w, this.size-2*this.w)
        }
    }

    get type() {
        return 'X'
    }
}

class O_Piece extends Piece {
    constructor(x,y, size, inBoard) {
        super(x,y, size, inBoard)
        this.w = this.size/10
        this.d = this.size - 4*this.w
        this.xC = this.x + this.size/2
        this.yC = this.y + this.size/2
    }

    draw() {
        if(this.inBoard) {
            gsb.stroke(0,0,255)
            gsb.noFill()
            gsb.strokeWeight(this.w)
            if(this.winPiece) {
                drawingContext.shadowBlur = 70;
                drawingContext.shadowColor = color(0,0,255);
                stroke(0,0,255)
                noFill()
                strokeWeight(this.w)
                circle(this.xC, this.yC, this.d)
                circle(this.xC, this.yC, this.d)
            }
    
            gsb.circle(this.xC, this.yC, this.d)
            
            if(this.size < 7) {
                gsb.fill(0,0,255)
                gsb.rect(this.x+this.w, this.y+this.w, this.size-2*this.w)
            }
    
            drawingContext.shadowBlur = 0;
            
        }
        else {
            stroke(0,0,255)
            noFill()
            strokeWeight(this.w)
    
            circle(this.xC, this.yC, this.d)
            
            if(this.size < 7) {
                fill(0,0,255)
                rect(this.x+this.w, this.y+this.w, this.size-2*this.w)
            }
        }
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

class Menu {
    constructor(x, menuWidth) {
        this.x = x
        this.width = menuWidth
        this.height = menuWidth*10
    }

    draw() {
        strokeWeight(1)
        stroke(255)
        fill(255)

        line(this.x, 0, this.x, this.height)

        //                Texts
        textAlign(CENTER)
        strokeWeight(0)
        textSize(this.width/4)

        let heightUnit = this.height/30

        // Layers
        text("Layers", this.x, 23*heightUnit - 39, this.width)
        text(maxlayer + (maxlayer >= 4 ? " !" : ""), this.x, 24*heightUnit - 39, this.width)

        // Turn
        text("Turn", this.x, heightUnit + 83, this.width)
        if(turn == ' ') {
            textSize(this.width/2)
            text("?", this.x, 2.5*heightUnit + 83, this.width)
        }

        // Build Board
        textSize(this.width/3)
        text(gameRunning ? "Stop" : "Start", this.x, 27.4*heightUnit - 39, this.width)

        // Layers Buttons
        let margin = this.width/20
        let buttonSize = (this.width - 3*margin)/2
        strokeWeight(this.width/50)
        fill(0)

        rect(this.x + margin               , 25*heightUnit - 39, buttonSize, buttonSize, buttonSize/10)
        line(this.x + 3*margin, 25*heightUnit + buttonSize/2 - 39, this.x - margin + buttonSize, 25*heightUnit + buttonSize/2 - 39)

        rect(this.x + 2*margin + buttonSize, 25*heightUnit - 39, buttonSize, buttonSize, buttonSize/10)
        line(this.x + 4*margin + buttonSize, 25*heightUnit + buttonSize/2 - 39, this.x + 0*margin + 2*buttonSize, 25*heightUnit + buttonSize/2 - 39)
        line(this.x + 2*margin + (3/2)*buttonSize, 25*heightUnit + 2*margin - 39, this.x + 2*margin + (3/2)*buttonSize, 25*heightUnit + buttonSize - 2*margin - 39)

        // Turn Symbol
        let turnSize = this.width - 2*margin
        if(turn != ' ') {
            let pX = this.x + margin
            let pY = 2*heightUnit + 83
            let p
            if (turn == 'X')
                p = new X_Piece(pX, pY, turnSize)
            else if (turn == 'O')
                p = new O_Piece(pX, pY, turnSize)
            p.draw()
        }

        // Build Board Button
        strokeWeight(this.width/50)
        stroke(255)
        noFill()
        rect(this.x + margin, 27*heightUnit - 39, turnSize, 0.7*turnSize, turnSize/7)

        // Scores
        strokeWeight(0)
        fill(255)

        text("Score", this.x, 10*heightUnit + 61, this.width)

        let p = new X_Piece(this.x + margin, 11*heightUnit + 61, 0.6*this.width)
        p.draw()

        p = new O_Piece(this.x + margin, 13*heightUnit + 61, 0.6*this.width)
        p.draw()

        textSize(this.width/4)
        strokeWeight(0)
        fill(255)
        textAlign(LEFT, TOP)

        text("Tie", this.x + 3.7*margin, 15.55*heightUnit + 61)
        
        textSize(this.width/3)
        text(xVictories, this.x + 5*margin + this.width/2, 11.5*heightUnit + 61)
        text(oVictories, this.x + 5*margin + this.width/2, 13.5*heightUnit + 61)
        text(nTies,      this.x + 5*margin + this.width/2, 15.5*heightUnit + 61)

    }

    insideRect(rX, rY, rWidth, rHeight, pX, pY) {
        if(pX >= rX && pX <= rX + rWidth && pY >= rY && pY <= rY + rHeight) return true
        return false
    }

    processMousePress(mX, mY) {
        let heightUnit = this.height/30
        let margin = this.width/20
        let buttonSize = (this.width - 3*margin)/2
        let turnSize = this.width - 2*margin

        if (this.insideRect(this.x + margin, 25*heightUnit - 39, buttonSize, buttonSize, mX, mY))
            updateBoardSize(-1)
        else if (this.insideRect(this.x + 2*margin + buttonSize, 25*heightUnit - 39, buttonSize, buttonSize, mX, mY))
            updateBoardSize(1)
        else if (this.insideRect(this.x + margin, 27*heightUnit - 39, turnSize, 0.7*turnSize, mX, mY)) {
            if(!gameRunning)
                startGame()
            else
                stopGame()
        }
    }
}

var tab
var maxlayer
var turn
var menu
var gameRunning
var xVictories
var oVictories
var nTies
var gsb

function setup() {
    let screenSize = 1000
    createCanvas(Math.floor(screenSize*1.1), screenSize)
    gsb = createGraphics(screenSize, screenSize);

    maxlayer = 0
    tab = Board.create()
    menu = new Menu(screenSize, Math.floor(screenSize*0.1))

    turn = ' '
    gameRunning = false
    xVictories = oVictories = nTies = 0
}

function draw() {
    background(0)

    if(gameRunning)
        tab.drawHover()
    else
        tab.drawWinPieces()
    image(gsb, 0,0)
    
    menu.draw()
}

function updateBoardSize(increment) {
    maxlayer += increment
    if(maxlayer < 0) maxlayer = 0
    if(!gameRunning)
        tab = Board.create()
}

function startGame() {
    tab = Board.create()
    turn = random(['X', 'O'])
    gameRunning = true
}

function stopGame() {
    turn = ' '
    gameRunning = false
}

function gameOver(end) {
    if(end == 'X')
        xVictories++
    else if(end == 'O')
        oVictories++
    else
        nTies++
    stopGame()
}

function mouseReleased() {
    
    if(mouseX < height && gameRunning)
        tab.processMousePress(mouseX, mouseY)
    else 
        menu.processMousePress(mouseX, mouseY)

    return false
}


function passTurn() {
    tab.draw()
    if(!gameRunning)
        return
    
    if(turn == 'X')
        turn = 'O'
    else
        turn = 'X'
    
    if(!tab.hasPlay())
        gameOver(' ')
}

// ICON GENERATION
// function setup() {
//     createCanvas(3000, 3000)
//     drawingContext.shadowBlur = 450;
//     noFill()
//     strokeWeight(350)

    
//     let v = color(255,0,0)
//     let b = color(0,0,255)
//     let margin = 350

//     stroke(v)
//     drawingContext.shadowColor = v;
//     line(margin, margin, 3000-margin, 3000-margin)
//     line(margin, margin, 3000-margin, 3000-margin)
    
//     stroke(b)
//     drawingContext.shadowColor = b;
//     circle(1500,1500, 3000-2*margin)
//     circle(1500,1500, 3000-2*margin)
    
//     stroke(v)
//     drawingContext.shadowColor = v;
//     line(margin, 3000-margin, 3000-margin, margin)
//     line(margin, 3000-margin, 3000-margin, margin)
// }