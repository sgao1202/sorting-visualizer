import React from 'react';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js'
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 2;
const MAX_LENGTH = 300;
const PRIMARY_COLOR = 'teal';
const SECONDARY_COLOR = 'purple';

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
        for (let i = 0; i < MAX_LENGTH; i++) {
            arr.push(randomIntFromInterval(5, 750));
        }
        this.setState({array:arr});
    }

    mergeSort() {
        const animations = sortingAlgorithms.mergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arr_bars = document.getElementsByClassName('array-bar');
            const color_change = i % 3 !== 2;
            if (color_change) {
                console.log(animations[i])
                const [b1_idx, b2_idx] = animations[i];
                if (b1_idx < MAX_LENGTH && b2_idx < MAX_LENGTH) {
                    const b1_style = arr_bars[b1_idx].style;
                    const b2_style = arr_bars[b2_idx].style;
                    const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                    setTimeout(() => {
                        b1_style.backgroundColor = color;
                        b2_style.backgroundColor = color;   
                    }, i * ANIMATION_SPEED_MS);
                }
            } else {
                setTimeout(() => {
                    const [b1_idx, new_height] = animations[i];
                    if (b1_idx < this.state.array.length) {
                        const b1_style = arr_bars[b1_idx].style;
                        b1_style.height = `${new_height}px`;
                    }
                }, i * ANIMATION_SPEED_MS);
            }
        }
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