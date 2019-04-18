function calcEquation(equations, values, queries) {
    const pairs = new Object();
    const valuesPair = new Object();
    for (let i = 0; i < equations.length; i++) {
        const equation = equations[i];
        if (!pairs[equation[0]]) {
            pairs[equation[0]] = new Array();
            valuesPair[equation[0]] = new Object();
        }
        if (!pairs[equation[1]]) {
            pairs[equation[1]] = new Array();
            valuesPair[equation[1]] = new Array();
        }

        pairs[equation[0]].push(equation[1]);
        pairs[equation[1]].push(equation[0]);
        valuesPair[equation[0]].push(values[i]);
        valuesPair[equation[1]].push(1/values[i]);

    }

    const result = new Array[queries.length];
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        result[i] = dfs(query[0], query[1], pairs, valuePairs, new Set(), 1.0);
        if (result[i] === 0.0) {
            result[i] = -1.0
        }
    }
    return result;
}

function dfs(start, end, pairs, values, set, value) {
    //set stores the current path so if there's a cycle
    //break out of it
    if (set.contains(start)) {return 0.0;}
    if (!pairs[start]) {return 0;}
    if (start === end) {
        return value;
    }
    set.push(start);

    const str_list = pairs[start];
    const value_list = values[start];
    let tmp = 0.0;
    for (let i = 0; i < str_list.length; i++) {
        tmp = dfs(str_list[i], end, pairs, values, set, value*value_list[i]);
        //if at any point a promising value is returned, then stop the search
        if (tmp !== 0.0) {
            break;
        }
    }
    set.remove(start);
    return tmp;
}