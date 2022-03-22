window.addEventListener("DOMContentLoaded", (event) => {
    document.body.addEventListener("click", (event) => {
        for (let i = 0; i < 400; i++) {
            let nodesWithChildren = keepNodesWithChildren(document.body);
            let randomNodeWithChildren = getRandomValueOfArray(nodesWithChildren);
            let [child1, child2] = getRandomTwoValuesOfArray(randomNodeWithChildren.children)
            changePosition(getRandomNode(child1), getRandomNode(child2))
        }
    })
});

function changePosition(node1, node2) {
    node2.parentNode.insertBefore(node1, node2);
}

function getNodeHigher(node) {
    let nodeHigher = 0;
    if (node.children.length > 0) {
        Array.from(node.children).forEach(element => {
            let lastChildren = getNodeHigher(element)
            if (nodeHigher < lastChildren) {
                nodeHigher = lastChildren;
            }
        });
    }
    return nodeHigher + 1;
}


function keepNodesWithChildren(node) {
    let nodes = [];
    if (node.children.length > 0) {
        if (node.children.length > 1) {
            nodes.push(node);
        }
        Array.from(node.children).forEach(element => {
            nodes = nodes.concat(keepNodesWithChildren(element));
        });
    }
    return nodes;
}


function keepNodesWithDepthIndex(node, depthLimit) {
    let nodes = [];
    if (depthLimit === 0) {
        nodes.push(node);
    }
    else if (node.children.length > 0) {
        Array.from(node.children).forEach(element => {
            nodes = nodes.concat(keepNodesWithDepthIndex(element, depthLimit - 1));
        });
    }
    return nodes;
}

function getRandomNode(parent) {
    return getRandomValueOfArray(keepNodesWithDepthIndex(parent, getRandomInt(getNodeHigher(parent), 0)));
}


function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomValueOfArray(array) {
    return array[getRandomInt(array.length, 0)];
}

function getRandomTwoValuesOfArray(array) {
    let firstIndex = getRandomInt(array.length, 0);
    let secondIndex = -1;
    while (secondIndex === -1 || secondIndex === firstIndex) {
        secondIndex = getRandomInt(array.length, 0);
    }
    return [array[firstIndex], array[secondIndex]];
}
