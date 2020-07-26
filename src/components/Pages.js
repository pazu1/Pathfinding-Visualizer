import React, { useState } from 'react'

export const HelpPage = () => {
    return (
        <div>
            <h2>How to use</h2>
            <p>
                Select an algorithm from the button on the top left of the page.<br/>
                From the Items-menu select a <span style = {{color: '#36bf00'}}>start</span> and an <span style = {{color: '#a200ff'}}>end</span> node and place them in the grid.<br/> Draw walls from the same menu or click the 'Generate maze'-button to create a maze.<br/>
                Click 'Run!' to run the visualization. The selected algorithm will then try to find a path between <span style = {{color: '#36bf00'}}>start</span> and <span style = {{color: '#a200ff'}}>end</span>. <br/><br/>
                
                <span style = {{color: '#38ffc7'}}>Visited</span> nodes nodes are marked in cyan. They are parts of the grid that the algorithm had to take into account in order to find the final path.<br/>
                When an algorithm performs efficiently there usually aren't too many of these and the path is found quickly.<br/>
                For more information about the algorithms used see the 'Algorithms'-tab.<br/><br/>
                If a <span style = {{color: '#f05e54'}}>path</span> is found it will be marked on the grid with red.<br/><br/>
            </p>
        </div>
    )
}

export const AlgorithmsPage = () => {
    return (
        <div>
            <h2>Introduction</h2>
            <p>
                This application uses a Manhattan distance heuristic, because it is a more intuitive choice for grid-based pathfinding in my opinion, as opposed to Pythagorean.
                <br/>
                <br/>
                The grid is basically an unweighted graph, meaning that the weight (or distance) between two adjacent nodes is the same everywhere, for which reason the algorthms are equivalent to their unweighted versions. 
                This is why there is no option for Dijkstra's algorthm, as it would behave the exact same as Breadth First Search in this instance.
            </p>

            <h2>Algorithms</h2>
            <p>
                There are four pathfinding algorithms to choose from 
                <ul>
                    <li>Breadth First Search</li>
                    <li>Depth First Search</li>
                    <li>A*</li>
                    <li>Greedy Best First Search</li>
                </ul>
            </p>
            
            <h2>Breadth First Search</h2>
            <p>
                Breadth First Search (BFS) is a simple pathfinding algorithm. It is always guaranteed to find the shortest path.
                Because there are no weights in the grid in this application this algorithm behaves the exact same as Dijkstra's algorithm would.
            </p>

            <h2>Depth First Search</h2>
            <p>
                Depth First Search (DFS) is an equally simple algorithm. The algorithm travels as far (deep) as possible in the graph before returning to unvisited nodes.
                For this reason it is in most cases not very efficient in finding a path. Depth First Search has many applications in solving other pathfinding related problems, such as finding 
                paths with cycles.<br/>
                Depth First Search is not guaranteed to find the shortest path.
            </p>

            <h2>A*</h2>
            <p>
                A* is a more complex pathfinding algorithm and considered to be one of the most efficient.
                It uses a heuristic guess to reduce the amount of time having to explore parts of the graph that are unlikely to lead to a good path.
                In terms of time complexity it is always at least as fast as Dijkstra's algorithm, usually much faster.<br/>
                A* is always guaranteed to find the shortest path.
            </p>

            <h2>Greedy Best First Search</h2>
            <p>
                This algorithm is almost the exact same as A*, but it uses a more greedy/aggressive heuristic guess,
                often leading it too far down the graph too fast but as a result sometimes finding a path more quickly than A* would.<br/>
                The tradeoff is that it is not guaranteed to find the shortest path.

            </p>
        </div>
    )
}
