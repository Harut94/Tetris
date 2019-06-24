const xCount = 10;
const yCount = 20;

(function bourd(){
    let container = document.querySelector('.container');   
    for(let i = 1, y = yCount; i <= yCount; ++i,--y){
        let contBox = document.createElement('div');
        container.appendChild(contBox);
        contBox.classList.add('contBox')
        for(let k = 1; k <= xCount; ++k){
            let box = document.createElement('div')
            box.classList.add('box')
            box.id = `${k} : ${y} `;
            contBox.appendChild(box)
            box.classList.add('box')
            if(k === 50 && y === 12){
                box.classList.add('paint')
            }
        }
    }
})();
let tetros = [
    // tetro i
    [
        [0,1],
        [0,2],
        [0,3],
        [
                        [-1,1],
                        [0,0],
                        [1,-1],
                        [2,-2],
                    ],
                    [
                        [1,-1],
                        [0,0],
                        [-1,1],
                        [-2,2],
                    ],
                    [
                        [-1,1],
                        [0,0],
                        [1,-1],
                        [2,-2],
                    ],
                    [
                        [1,-1],
                        [0,0],
                        [-1,1],
                        [-2,2],
                    ],
    ],
    // tetro o
    [
        [1,0],
        [0,1],
        [1,1],
        [
                        [0,0],
                        [0,0],
                        [0,0],
                        [0,0],
                    ],
                    [
                        [0,0],
                        [0,0],
                        [0,0],
                        [0,0],
                    ],
                    [
                        [0,0],
                        [0,0],
                        [0,0],
                        [0,0],
                    ],
                    [
                        [0,0],
                        [0,0],
                        [0,0],
                        [0,0],
                    ],
    ],
    // tetro L
    [
        [1,0],
        [0,1],
        [0,2],
        [
                        [0,0],
                        [-1,1],
                        [1,0],
                        [2,-1],
                    ],
                    [
                        [1,-1],
                        [1,-1],
                        [-1,0],
                        [-1,0],
                    ],
                    [
                        [-1,0],
                        [0,-1],
                        [2,-2],
                        [1,-1],
                    ],
                    [
                        [0,-1],
                        [0,-1],
                        [-2,0],
                        [-2,0],
                    ],
    ],
    //tetro j
    [
        [1,0],
        [1,1],
        [1,2],
        [
                        [0,0],
                        [0,0],
                        [1,-1],
                        [-1,-1],
                    ],
                    [
                        [0,-1],
                        [-1,0],
                        [-2,1],
                        [1,0],
                    ],
                    [
                        [2,0],
                        [0,0],
                        [1,-1],
                        [1,-1],
                    ],
                    [
                        [-2,0],
                        [1,-1],
                        [0,0],
                        [-1,1],
                    ]
    ],
    // tetro s
    [
        [1,0],
        [-1,1],
        [0,1],
        [
                        [0,-1],
                        [-1,0],
                        [2,-1],
                        [1,0],
                        ],
                        [
                        [0,0],
                        [1,-1],
                        [-2,0],
                        [-1,-1],
                        ],
                        [
                        [0,-1],
                        [-1,0],
                        [2,-1],
                        [1,0],
                        ],
                        [
                        [0,0],
                        [1,-1],
                        [-2,0],
                        [-1,-1],
                        ],
    ],
    // tetro z
    [
        [1,0],
        [1,1],
        [2,1],
        [
                        [2,-1],
                        [0,0],
                        [1,-1],
                        [-1,0],
                    ],
                    [
                        [-2,0],
                        [0,-1],
                        [-1,0],
                        [1,-1],
                    ],
                    [
                        [2,-1],
                        [0,0],
                        [1,-1],
                        [-1,0],
                    ],
                    [
                        [-2,0],
                        [0,-1],
                        [-1,0],
                        [1,-1],
                    ]
    ],
    // srika detal
    [
        [1,0],
        [2,0],
        [1,1],
        [
                        [1,-1],
                        [0,0],
                        [0,0],
                        [0,0],
                    ],
                    [
                        [0,0],
                        [-1,0],
                        [-1,0],
                        [1,-1],
                    ],
                    [
                        [1,-1],
                        [1,-1],
                        [1,-1],
                        [0,0],
                    ],
                    [
                        [-2,0],
                        [0,-1],
                        [0,-1],
                        [-1,-1],
                    ],
    ],
]
let music = document.getElementById('music');



let x = 5;
let y = 17;
let figur;
let rotate = 1;
let tetro;
let scores = 0;
let yourScores = document.querySelector('.scores')
let intervalLevel = 1200;
let interval;
let temp = true;
let buttonTemp = true
let button = document.querySelector('button');
button.addEventListener('click', function(e){
    if(buttonTemp){
        buttonTemp = false;
        start();
    } else{
        document.location.reload(true);
    }
})
function start(){
    // debugger;
    music.play();
    if(temp){
        temp = false;
    interval = setInterval(move, intervalLevel)};
    function random(){
        return Math.round(Math.random() * (tetros.length-1))
    }
    rotate = 1;
    tetro = random();
    figur = [
        document.getElementById(`${x} : ${y} `),
        document.getElementById(`${x + tetros[tetro][0][0]} : ${y + tetros[tetro][0][1]} `),
        document.getElementById(`${x + tetros[tetro][1][0]} : ${y + tetros[tetro][1][1]} `),
        document.getElementById(`${x + tetros[tetro][2][0]} : ${y + tetros[tetro][2][1]} `)
    ]

    for(let i = 0; i < figur.length; ++i){
        figur[i].classList.add('paint')
    }    
}

// start();

let cord


function move(){
    // debugger;
    let flagDown = true;
    cord = [
        [+figur[0].getAttribute('id').slice(0,2), +figur[0].getAttribute('id').slice(4,7)],
        [+figur[1].getAttribute('id').slice(0,2), +figur[1].getAttribute('id').slice(4,7)],
        [+figur[2].getAttribute('id').slice(0,2), +figur[2].getAttribute('id').slice(4,7)],
        [+figur[3].getAttribute('id').slice(0,2), +figur[3].getAttribute('id').slice(4,7)],
    ]

    for(let i = 0; i < cord.length; ++i){
        if(cord[i][1] == 1 || document.getElementById(`${+cord[i][0]} : ${+cord[i][1]-1} `).classList.contains('end')){
            flagDown = false;
            break;
        }
    }

    if(flagDown){
        for(let i = 0; i < figur.length; ++i){
            figur[i].classList.remove('paint');
        }    
        figur = [
            document.getElementById(`${cord[0][0]} : ${cord[0][1]-1} `),
            document.getElementById(`${cord[1][0]} : ${cord[1][1]-1} `),
            document.getElementById(`${cord[2][0]} : ${cord[2][1]-1} `),
            document.getElementById(`${cord[3][0]} : ${cord[3][1]-1} `)
        ]
        for(let i = 0; i < figur.length; ++i){
            figur[i].classList.add('paint');
        }    
    }else{
        // debugger;
        for(let i = 0; i < figur.length; ++i){
            figur[i].classList.remove('paint');
            figur[i].classList.add('end')
        }
        for(let i = 1; i <15; i++){
            let count = 0;
            for(let k = 1; k < 11; k++){
                if(document.getElementById(`${k} : ${i} `).classList.contains('end')){
                    count++;
                    if(count == 10){
                        scores +=100;
                        yourScores.innerHTML = `Your scores :${scores}`;
                        for(let m =1; m < 11; m++){
                            document.getElementById(`${m} : ${i} `).classList.remove('end');
                        }
                        let end = document.querySelectorAll('.end');
                        let newEnd = [];
                        for(let s = 0; s<end.length; s++){
                            // debugger;
                            let endCords = [+end[s].getAttribute('id').slice(0,2),+end[s].getAttribute('id').slice(4,7)];
                            if(endCords[1] > i){
                                end[s].classList.remove('end');
                                newEnd.push(document.getElementById(`${endCords[0]} : ${endCords[1]-1} `))
                            }
                        }
                        for(let a = 0; a <newEnd.length; a++){
                            newEnd[a].classList.add('end')
                        }
                        i--;
                    }
                }
            }
        }
            for(let i = 1; i <=10; ++i){
                if(document.getElementById(`${i} : ${17} `).classList.contains('end')){
                    clearInterval(interval);
                    alert(`սաղ սաղ ${scores}`);
                    move = undefined;
                    break;
                }
            }
        start();
        if(scores === 1000 && intervalLevel > 100){
            clearInterval(interval);
            interval = setInterval(move, intervalLevel -=100)
        }
    }
}

function pause(){
    clearInterval(interval)
}
window.addEventListener('keydown', function(e){
    if(e.keyCode == 40 || e.keyCode == 83){
            move()
            
    }
});


let flag = true;
window.addEventListener('keydown', function(e){
    // debugger;
    let cord1 = [+figur[0].getAttribute('id').slice(0,2), +figur[0].getAttribute('id').slice(4,7)];
    let cord2 = [+figur[1].getAttribute('id').slice(0,2), +figur[1].getAttribute('id').slice(4,7)];
    let cord3 = [+figur[2].getAttribute('id').slice(0,2), +figur[2].getAttribute('id').slice(4,7)];
    let cord4 = [+figur[3].getAttribute('id').slice(0,2), +figur[3].getAttribute('id').slice(4,7)];

    function getNewState(a){
        flag = true;
        let newFigur = [
            document.getElementById(`${+cord1[0] + a} : ${+cord1[1]} `),
            document.getElementById(`${+cord2[0] + a} : ${+cord2[1]} `),
            document.getElementById(`${+cord3[0] + a} : ${+cord3[1]} `),
            document.getElementById(`${+cord4[0] + a} : ${+cord4[1]} `)
        ];

        for(let i = 0; i < newFigur.length; ++i){
            if(!newFigur[i] || newFigur[i].classList.contains('end')){
                flag = false;
            }
        }

        if(flag){
            for(let i = 0; i < figur.length; ++i){
                figur[i].classList.remove('paint')
            }   

            figur = newFigur;

            for(let i = 0; i < figur.length; ++i){
                figur[i].classList.add('paint')
            } 
        }
    }

    if(e.keyCode == 37 || e.keyCode == 65){
        getNewState(-1);
    }else if(e.keyCode == 39 || e.keyCode == 68){
        getNewState(1);
    } else if(e.keyCode == 38 || e.keyCode == 87){
       
            flag = true;
            let newFigur = [
                document.getElementById(`${+cord1[0] + tetros[tetro][rotate+2][0][0]} : ${+cord1[1] + tetros[tetro][rotate+2][0][1]} `),
                document.getElementById(`${+cord2[0] + tetros[tetro][rotate+2][1][0]} : ${+cord2[1] + tetros[tetro][rotate+2][1][1]} `),
                document.getElementById(`${+cord3[0] + tetros[tetro][rotate+2][2][0]} : ${+cord3[1] + tetros[tetro][rotate+2][2][1]} `),
                document.getElementById(`${+cord4[0] + tetros[tetro][rotate+2][3][0]} : ${+cord4[1] + tetros[tetro][rotate+2][3][1]} `)
            ];
    
            for(let i = 0; i < newFigur.length; ++i){
                if(!newFigur[i] || newFigur[i].classList.contains('end')){
                    flag = false;
                }
            }
    
            if(flag){
                for(let i = 0; i < figur.length; ++i){
                    figur[i].classList.remove('paint')
                }   
    
                figur = newFigur;
    
                for(let i = 0; i < figur.length; ++i){
                    figur[i].classList.add('paint')
                } 
                if(rotate < 4){
                    rotate++;
                } else {
                    rotate = 1;
                }
            }
        }

})