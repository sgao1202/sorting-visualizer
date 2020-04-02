import React from 'react';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js'
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        let arr = [];
        for (let i = 0; i < 300; i++) {
            arr.push(randomIntFromInterval(5, 750));
        }
        this.setState({array:arr});
    }

    mergeSort() {
        const arr = this.state.array.slice().sort((a,b) => {
            return a - b;
        });
        const mergedArray = sortingAlgorithms.mergeSort(this.state.array);

        console.log(arraysEqual(arr, mergedArray));
    }

    quickSort() {

    }

    heapSort() {

    }

    bubbleSort() {

    }

    render() {
        const curr_array = this.state.array;
        return (
            <div  className="array-container">
                {curr_array.map((value, idx) => (
                    <div className="array-bar" 
                        key={idx} 
                        style={{height: `${value}px`}}></div>
                ))}
                <div>
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
            </div>
        );
    }
}

// Returns a random integer from the intreval (min, max)
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}