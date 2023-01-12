//Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.

// The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple.

// Example 1:

// Input: edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]

// Output: 8

// Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.

// Example 2:

// Input: edges = [[0,1],[1,2],[0,3]], hasApple = [false,true,false,false]

// Output: 6

// Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.

// Example 3:

// Input: edges = [[0,1],[1,2],[2,3],[1,4],[4,5]], hasApple = [false,true,true,false,false,true]

// Output: 4

// Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.

// Constraints:

// 1 <= edges.length <= 2 * 104

// edges[i].length == 2

// 0 <= ai < bi <= n - 1

// fromi < toi

// hasApple.length == n

// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Minimum Time to Collect All Apples in a Tree.

// Memory Usage: 42.1 MB, less than 100.00% of TypeScript online submissions for Minimum Time to Collect All Apples in a Tree.

function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
    const graph: number[][] = [];
    for (let i = 0; i < n; i++) {
        graph.push([]);
    }
    for (const [from, to] of edges) {
        graph[from].push(to);
        graph[to].push(from);
    }
    const visited: boolean[] = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    return dfs(graph, visited, hasApple, 0);
}

function dfs(graph: number[][], visited: boolean[], hasApple: boolean[], node: number): number {
    visited[node] = true;
    let time = 0;
    for (const next of graph[node]) {
        if (!visited[next]) {
            time += dfs(graph, visited, hasApple, next);
        }
    }
    if (time > 0 || hasApple[node]) {
        time += 2;
    }
    return time;
}

// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Minimum Time to Collect All Apples in a Tree.

