export const CellStyles = [
    {
        background: '#eee',
        color: '#000',
        transform: 'scale(1.0)'
    },
    {
        background: '#000',
        color: '#000',
        transform: 'scale(1.0)'
    },
    {
        background: '#d2ff4a',
        transform: 'scale(1.0)',
        textContent: 's'
    },
    {
        background: '#fcba03',
        transform: 'scale(1.0)',
        textContent: 'e'
    },
    {
        background: '#38ffc7',
        transform: 'scale(0.2)'
    },
    {
        background: '#f05e54',
        transform: 'scale(1.0)'
    }
]

export const Alg = {
    ASTAR: 1,
    DIJKSTRA: 2,
    BFS: 3,
    DFS: 4
}

export const CellType = {
    NONE: 0,
    WALL: 1,
    START: 2,
    END: 3,
    VISITED: 4,
    ROUTE: 5
}

export const VizState = {
    INACTIVE: 0,
    RUNNING: 1,
    FINISHED: 2
}

export const AlertTypes = {
    NOSTART: 'Please add a start node.',
    NOEND: 'Please add an end node.',
    NOROUTE: 'Route was not found'
}

export const Adjacent = [
    [-1,0],
    [0,1],
    [1,0],
    [0,-1]
]
